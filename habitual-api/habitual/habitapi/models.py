from django.db import models


# Create your models here.
class Habit(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    frequency = models.IntegerField(default=1)
    progress = models.IntegerField(default=0)
