from rest_framework import generics, permissions 
from rest_framework.response import Response 
from knox.models import AuthToken 
from .serializers import UserSerializer, RegisterSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    # sends out post w/ registration data
    def post(self, request, *args, **kwargs):

        # any request data gets passed into the serializer
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1] # creates token specific to user (tells people who you are) 
        })

# Login API 

# Get User API 

