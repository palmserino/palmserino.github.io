from .models import Snack, Eat 
from rest_framework import viewsets, permissions
from .serializers import SnackSerializer, EatSerializer

# django viewsets == Resources/Controllers in other frameworks 
# provides actions 

class SnackViewSet(viewsets.ModelViewSet):
    permissions_classes = [
        permissions.IsAuthenticated 
    ]

    serializer_class = SnackSerializer

    # returns the objects based on the user 
    def get_queryset(self):
        return self.request.user.snacks.all()

    # saves the owner when we create a new object
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class EatViewSet(viewsets.ModelViewSet):
    permissions_classes = [
        permissions.IsAuthenticated 
    ]

    serializer_class = EatSerializer

    def get_queryset(self):
        return Eat.objects.all()
        
    def perform_create(self, serializer):
        serializer.save()



