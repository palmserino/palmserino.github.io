from django.db import models

# Create your models here.

class ShoppingList(models.Model):
    name = models.CharField(max_length=20)
    item = models.CharField(max_length=10)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.name 
