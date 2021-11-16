from rest_framework import serializers 
from .models import Snack, Eat 

# use django rest_framework to serializer model objects that 
# will eventually get turned into JSON 

class SnackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Snack
        fields = '__all__'

class EatSerializer(serializers.ModelSerializer):
    #snack = SnackSerializer()
    class Meta:
        model = Eat
        fields = '__all__'
        depth = 1 # gets the associated snack data for the id 