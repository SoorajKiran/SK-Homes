from django.db import models

# Create your models here.

class Contact(models.Model):
    name=models.CharField(max_length=100)
    mobile=models.PositiveBigIntegerField(null=True)
    email=models.EmailField(max_length=250)
    subject=models.CharField(max_length=250)
    description=models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Seller(models.Model):
    name=models.CharField(max_length=100)
    mobile=models.PositiveIntegerField()
    email=models.EmailField(max_length=250)
    purpose=models.CharField(max_length=20)
    details=models.CharField(max_length=255)

    def __str__(self):
        return self.name