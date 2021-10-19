from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User 
from django.core.validators import MaxValueValidator, MinValueValidator


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


# eats class (many eats associated with one snack)
class Eat(models.Model):
    amount = models.FloatField(default=0.0,validators=[MinValueValidator(0.0), MaxValueValidator(1.0)],) 
    satisfaction = models.IntegerField(default=0,validators=[MinValueValidator(0), MaxValueValidator(10)])
    location = models.CharField(max_length=20, null=True)
    shared = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)

    # True = snack
    snack_or_meal = models.BooleanField(default=True)


    snack = models.ForeignKey(Snack, related_name="eats", on_delete=models.CASCADE,
                                null=True )

    def __str__(self):
        return str(self.id)

    def get_absolute_url(self):
        return reverse('eat-detail', kwargs={'pk': self.pk})