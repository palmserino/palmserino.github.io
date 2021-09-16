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
# don't need serializers.ModelSerializer because only validating that 
# user exists not creating a model
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user 
        raise serializers.ValidationError('Incorrect Credentials')