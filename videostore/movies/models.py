from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from datetime import date

class Movie(models.Model):
    MovieID = models.AutoField(primary_key=True)
    MovieTitle = models.CharField(max_length=200)
    Actor1Name = models.CharField(max_length=100, blank=True)
    Actor2Name = models.CharField(max_length=100, blank=True)
    DirectorName = models.CharField(max_length=100, blank=True)
    MovieGenre = models.CharField(max_length=50)
    ReleaseYear = models.PositiveIntegerField(
        validators=[MinValueValidator(1888), MaxValueValidator(date.today().year)]
    )

    def __str__(self):
        return f"{self.MovieTitle} ({self.ReleaseYear})"
