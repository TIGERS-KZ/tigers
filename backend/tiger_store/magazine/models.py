from django.db import models

class ProductManager(models.Manager):

    def available(self):
        return self.filter(availability=True)

class Category(models.Model):#1

    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class Brand(models.Model):#3

    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='', blank=True)
    description = models.TextField(blank=True)
   
    def __str__(self):
        return self.name

class Products(models.Model):#2
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='')
    price = models.DecimalField(max_digits=10, decimal_places=5)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=True, null=False)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, default=True, null=False)

    def __str__(self):
        return self.name
    
    objects = ProductManager()
    
class Cart(models.Model):#4
    product = models.ManyToManyField(Products)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}'s cart"
