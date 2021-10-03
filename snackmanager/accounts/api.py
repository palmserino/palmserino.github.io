from rest_framework import generics, permissions 
from rest_framework.response import Response 
from knox.models import AuthToken 
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from django.contrib.auth import login 

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    # sends out post w/ registration data
    def post(self, request, *args, **kwargs):

        # any request data gets passed into the serializer
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        # the response to sending out a post registering a user
        # gives the user data and the token associated with that user
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1] # creates token specific to user (tells people who you are) 
        })

# Login API 
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    # sends out post w/ registration data
    def post(self, request, *args, **kwargs):

        # any request data gets passed into the serializer
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data
        login(request, user)

        # the response to sending out a post registering a user
        # gives the user data and the token associated with that user
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1] # creates token specific to user (tells people who you are) 
        })


# Get User API 
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated, # want to make sure they are logged in/authenticated
    ]

    serializer_class = UserSerializer

    # look at the token and return the user associated with it 
    def get_object(self):
        return self.request.user 

