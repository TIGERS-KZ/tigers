# Generated by Django 4.1.7 on 2023-05-05 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('magazine', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='logo',
            field=models.CharField(max_length=255),
        ),
    ]
