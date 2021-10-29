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

    # might need a get_queryset that takes in a user and snack 
    # to get all the eats associated with that?
    """     def get_queryset(self):
            snacks = self.request.user.snacks.all()
            return snacks.eats.all() """

    queryset = Eat.objects.all() # this just displays all the eats objects out there


    def perform_create(self, serializer):
        serializer.save()

