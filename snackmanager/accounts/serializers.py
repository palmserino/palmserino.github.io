from rest_framework import serializers
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate 

# User Serializer 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ('id','username','email')

# Register Serializer (need a password to register)
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password')
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    # Returns a created user 
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )

        return user 


# Login Serializer 