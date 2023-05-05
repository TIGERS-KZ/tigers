from django.shortcuts import render 
from rest_framework import generics 
 
from .serializers import BrandSerializer, CartSerializer, CategorySerializer, ProductsSerializer
from .models import Cart, Category, Products 
 
class ProductListView(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Products.objects.all() 
    serializer_class = ProductsSerializer 
 
class CategoryListView(generics.RetrieveUpdateDestroyAPIView): 
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