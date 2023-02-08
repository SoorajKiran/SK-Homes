from django.contrib import admin
from .models import Contact,Seller

# Register your models here.
class ContactAdmin(admin.ModelAdmin):
    list=['name','mobile','email','subject','description']

    admin.site.register(Contact)

class SellerAdmin(admin.ModelAdmin):
    list=['name','mobile','email','purpose','details']

    admin.site.register(Seller)