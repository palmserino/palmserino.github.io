from .models import ShoppingList
from rest_framework import viewsets, permissions
from .serializers import ShoppingListSerializer

class ShoppingListViewSet(viewsets.ModelViewSet):
    serializer_class = ShoppingListSerializer
    queryset = ShoppingList.objects.all() # grabs all of the shoppingList objects 

