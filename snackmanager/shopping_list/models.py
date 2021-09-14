from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User 


class ShoppingList(models.Model):
    name = models.CharField(max_length=20)
    item = models.CharField(max_length=10)
    done = models.BooleanField(default=False)


    # models.CASCADE deletes all ShoppingLists associated with a User object 
    owner = models.ForeignKey(User, related_name="snacks", on_delete=models.CASCADE,
                                null=True )

    def __str__(self):
        return self.name 

    def get_absolute_url(self):
        return reverse('shoppingList-detail', kwargs={'pk': self.pk})
