from django import forms
from .models import Movie

class MovieForm(forms.ModelForm):
    class Meta:
        model = Movie
        fields = ['MovieTitle','Actor1Name','Actor2Name','DirectorName','MovieGenre','ReleaseYear']
