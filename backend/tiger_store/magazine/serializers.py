from rest_framework import serializers
from .models import Brand, Cart, Category, Products

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
    
    ##############################################################

class BrandSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    logo = serializers.ImageField(required=False)
    description = serializers.CharField(required=False)

    def create(self, validated_data):
        return Brand.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.logo = validated_data.get('logo', instance.logo)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance
    
    ##############################################################################

class ProductsSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    brand = serializers.StringRelatedField()

    class Meta:
        model = Products
        fields = ['id', 'name', 'description', 'image', 'price', 'category', 'brand']

    ###############################################################################

class CartSerializer(serializers.ModelSerializer):
    product = ProductsSerializer(many=True)

    class Meta:
        model = Cart
        fields = ['id', 'product', 'created_at']