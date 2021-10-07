# Generated by Django 3.2.5 on 2021-10-06 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('snacks', '0005_auto_20210914_2213'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='snack',
            name='done',
        ),
        migrations.RemoveField(
            model_name='snack',
            name='item',
        ),
        migrations.AddField(
            model_name='snack',
            name='price',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='snack',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='snack',
            name='store_name',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='snack',
            name='time_purchased',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='snack',
            name='total_cals',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='snack',
            name='type',
            field=models.CharField(choices=[('sweet', 'SWEET'), ('savory', 'SAVORY'), ('sour', 'SOUR')], default='', max_length=6),
        ),
    ]