from backend_api.views import ContactViewSet,SellerViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register('contact',views.ContactViewSet,basename='contact')
router.register('seller',views.SellerViewSet,basename='seller')

urlpatterns=router.urls

