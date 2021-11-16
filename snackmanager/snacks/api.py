from .models import Snack, Eat 
from rest_framework import viewsets, permissions
from rest_framework.response import Response
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
        
    def create(self,request):
        # get the data from our request
        eat_data = request.data 
 
        # create a new eat where the snack is = to the snack object with the given ID of the snack
        new_eat = Eat.objects.create(amount=eat_data['amount'], satisfaction=eat_data['satisfaction'],
                                        location=eat_data['location'], 
                                        snack=Snack.objects.get(id=eat_data['id'])) # get the snack object with the corresponding id 

        # save it in db 
        new_eat.save()
        
        # create a serializer for it to return
        serializer = EatSerializer(new_eat)

        return Response(data=serializer.data)



