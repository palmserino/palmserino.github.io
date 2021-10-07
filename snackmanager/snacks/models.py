from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User 


""" class Snack(models.Model):
    name = models.CharField(max_length=20)
    item = models.CharField(max_length=10)
    done = models.BooleanField(default=False)


    # models.CASCADE deletes all ShoppingLists associated with a User object 
    owner = models.ForeignKey(User, related_name="snacks", on_delete=models.CASCADE,
                                null=True )

    def __str__(self):
        return self.name 

    def get_absolute_url(self):
        return reverse('snack-detail', kwargs={'pk': self.pk}) """

SNACK_TYPES = (
    ('sweet','SWEET'),
    ('savory','SAVORY'),
    ('sour','SOUR'),
)

class Snack(models.Model):
    # id handled in background (primary key for this model)
    name = models.CharField(max_length=20)
    price = models.FloatField(default=0) 
    store_name = models.CharField(max_length=20, default='')
    quantity = models.IntegerField(default=0)
    type = models.CharField(max_length=6, choices=SNACK_TYPES, default='')
    total_cals = models.IntegerField(default=0)
    time_purchased = models.DateTimeField(auto_now=False, auto_now_add=False, null=True)

    # models.CASCADE deletes all ShoppingLists associated with a User object 
    owner = models.ForeignKey(User, related_name="snacks", on_delete=models.CASCADE,
                                null=True )

    def __str__(self):
        return self.name 

    def get_absolute_url(self):
        return reverse('snack-detail', kwargs={'pk': self.pk})
