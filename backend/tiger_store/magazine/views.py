from django.shortcuts import render 
from rest_framework import generics 
from rest_framework.views import APIView

from .serializers import BrandSerializer, CartSerializer, CategorySerializer, ProductsSerializer
from .models import Cart, Category, Products 
 
class ProductListView(generics.ListCreateAPIView): 
    queryset = Products.objects.all() 
    serializer_class = ProductsSerializer 
 
class CategoryListView(generics.ListCreateAPIView): 
    queryset = Category.objects.all() 
    serializer_class = CategorySerializer 
 
class ProductDetailView(generics.CreateAPIView): 
    queryset = Products.objects.all() 
    serializer_class = ProductsSerializer 
    lookup_field = 'id'
 
class CattListView(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Cart.objects.all() 
    serializer_class = CartSerializer
    lookup_field = 'id'

class CartView(APIView):
    def post(self, request, product_id):
        cart = Cart.objects.filter(user=request.user, product_id=product_id).first()
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            if cart is not None:
                serializer.update(cart, serializer.validated_data)
            else:
                serializer.save(user=request.user, product_id=product_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        queryset = Cart.objects.filter(user=request.user)
        serializer = CartSerializer(queryset, many=True)
        return Response(serializer.data)

    def put(self, request, cart_id):
        cart = Cart.objects.filter(user=request.user, id=cart_id).first()
        serializer = CartSerializer(cart, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, cart_id):
        cart = Cart.objects.filter(user=request.user, id=cart_id).first()
        if cart is not None:
            cart.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)