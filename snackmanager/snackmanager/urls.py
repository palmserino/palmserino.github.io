from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('snacks.urls')), # includes from shopping_list/urls.py 
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
]
