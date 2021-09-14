from django.shortcuts import render
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from .models import Snack   
from .serializers import SnackSerializer
from rest_framework import viewsets 

# Create your views here.

def index(request):
    welcome_str = 'Hello and welcome, hopefully this will help you find some good snacks!'
    return HttpResponse(welcome_str)  
