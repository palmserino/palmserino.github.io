# Generated by Django 3.2.8 on 2021-11-16 04:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snacks', '0009_auto_20211029_2112'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eat',
            name='snack',
        ),
    ]