from django.urls import path
from .views import get_github_users

urlpatterns = [
    path('github-users/', get_github_users),
]
