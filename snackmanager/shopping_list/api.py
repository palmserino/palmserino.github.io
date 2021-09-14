from .models import ShoppingList
from rest_framework import viewsets, permissions
from .serializers import ShoppingListSerializer

class ShoppingListViewSet(viewsets.ModelViewSet):
    serializer_class = ShoppingListSerializer
    permissions_classes = [
        permissions.IsAuthenticated 
    ]

    # returns the objects based on the user 
    def get_queryset(self):
        return self.request.user.ShoppingLists.all()

    # saves the owner when we create a new object
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


