# Generated by Django 4.1.7 on 2023-05-05 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('magazine', '0002_alter_brand_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.CharField(max_length=255),
        ),
    ]