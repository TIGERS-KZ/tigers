from imaplib import _Authenticator
from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class UserRegistrationView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')

        if not username or not password or not email:
            return Response({'error': 'Username, password, and email are required'})

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'})

        user = User.objects.create_user(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        user.save()

        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)

        return Response({'token': token})


class UserLoginView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = _Authenticator(username=username, password=password)
        if user is not None:
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)
            return Response({'token': token})
        else:
            return Response({'error': 'Invalid credentials'})