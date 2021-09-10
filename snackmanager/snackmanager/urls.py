from django.contrib import admin
from django.urls import path, include 

urlpatterns = [
    path('react-test/', include('frontend.urls')),
    path('', include('shopping_list.urls')), # includes from shopping_list/urls.py 
    path('admin/', admin.site.urls),
]
