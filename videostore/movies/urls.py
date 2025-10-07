from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('', views.movie_list, name='list'),          # display video information (list)
    path('add/', views.movie_create, name='create'),  # add a new video
    path('<int:pk>/', views.movie_detail, name='detail'),
    path('<int:pk>/edit/', views.movie_update, name='update'),   # update video details
    path('<int:pk>/delete/', views.movie_delete, name='delete'),  # delete a video record
]
