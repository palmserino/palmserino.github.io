from django.urls import path, include 
from rest_framework import routers 
from . import views 
from .views import * 
from .api import ShoppingListViewSet

# use router to create the paths 
router = routers.DefaultRouter()
router.register(r'shoppingLists', ShoppingListViewSet, 'shoppingLists')  

urlpatterns = [
    # path('api', views.ShoppingListView, name='shopping list view'),
    path('', views.index, name='index'),
    path('api/', include(router.urls))
]