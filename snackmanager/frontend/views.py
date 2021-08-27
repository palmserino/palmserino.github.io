from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html') # renders the index.html template from the frontend directory 