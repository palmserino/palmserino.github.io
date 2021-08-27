from django.db import models
from django.urls import reverse

class ShoppingList(models.Model):
    name = models.CharField(max_length=20)
    item = models.CharField(max_length=10)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.name 

    def get_absolute_url(self):
        return reverse('shoppingList-detail', kwargs={'pk': self.pk})
