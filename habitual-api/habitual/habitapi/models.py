import uuid
from datetime import timedelta

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


class HabitualUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)


class Habit(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    frequency = models.IntegerField(default=1)
    owner = models.ForeignKey(HabitualUser, on_delete=models.CASCADE)

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
    owner = models.ForeignKey(HabitualUser, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.habit.name} at {self.date}'


class Tag(models.Model):
    name = models.CharField(max_length=50)
    habit = models.ManyToManyField(
        Habit,
        blank=True
    )

    def __str__(self):
        return self.name
