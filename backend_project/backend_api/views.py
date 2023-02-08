from django.shortcuts import render
from .models import Contact,Seller
from .serializers import ContactSerializer,SellerSerializer
from rest_framework import viewsets
# Create your views here.

class ContactViewSet(viewsets.ModelViewSet):
    serializer_class=ContactSerializer
    queryset=Contact.objects.all()

class SellerViewSet(viewsets.ModelViewSet):
    serializer_class=SellerSerializer
    queryset=Seller.objects.all()