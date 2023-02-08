from rest_framework import serializers
from backend_api.models import Contact,Seller

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model= Seller
        fields= '__all__'