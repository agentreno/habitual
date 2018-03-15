from django.db import models
from django.utils import timezone
from datetime import timedelta


class Habit(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    frequency = models.IntegerField(default=1)

    @property
    def progress(self):
        # The number of associated activities in the last week
        return Activity.objects.filter(
            habit__id=self.id,
            date__gt=timezone.now() - timedelta(days=7)
        ).count()

    def __str__(self):
        return self.name


class Activity(models.Model):
    habit = models.ForeignKey(Habit, on_delete=models.CASCADE)
    date = models.DateTimeField('date of activity')

    def __str__(self):
        return f'{self.habit.name} at {self.date}'
