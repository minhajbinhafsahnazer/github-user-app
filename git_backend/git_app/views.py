import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_github_users(request):
    query = request.GET.get('q')
    if query:
        # Search by username
        response = requests.get(f'https://api.github.com/search/users?q={query}')
        data = response.json().get('items', [])
    else:
        # Default list
        response = requests.get('https://api.github.com/users')
        data = response.json()

    return Response(data)
