from .models import Snack
from rest_framework import viewsets, permissions
from .serializers import SnackSerializer

class SnackViewSet(viewsets.ModelViewSet):
    serializer_class = SnackSerializer
    permissions_classes = [
        permissions.IsAuthenticated 
    ]

    # returns the objects based on the user 
    def get_queryset(self):
        return self.request.user.Snack.all()

    # saves the owner when we create a new object
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


