from django.urls import path, include 
from rest_framework import routers 
from . import views 
from .views import * 
from .api import SnackViewSet

# use router to create the paths 
router = routers.DefaultRouter()
router.register(r'snacks', SnackViewSet, 'snacks')  

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include(router.urls))
]