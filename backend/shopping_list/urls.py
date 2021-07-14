from django.urls import path 

from . import views 

urlpatterns = [
    path('api', views.ShoppingListView, name='shopping list view'),
    path('', views.index, name='index')
]