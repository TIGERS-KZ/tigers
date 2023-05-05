from django.contrib import admin
from .models import ProductManager, Category, Cart, Products, Brand
# Register your models here.

admin.site.register(Products)
admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(Brand)