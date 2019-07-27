from rest_framework import viewsets
from .serializers import ScoreCardSerializer
from .models import ScoreCard
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User

class ScoreCardView(viewsets.ModelViewSet):
  serializer_class = ScoreCardSerializer
  queryset = ScoreCard.objects.all()

class StudentView(APIView):
  def get(self, request):
    students = User.objects.all()
    return Response({"students": [students]})

class LoginView(APIView):
  def post(self, request):
    request_data = request.data
    try:
      user = User.objects.get(email=request_data['email'], password=request_data['password'])
      request.session['email'] = request_data['email']
      print dict(request.session)
      return Response({"result" : 200})
    except:
      return Response({"result": 204})

class RegisterView(APIView):
  def post(self, request):
    request_data = request.data
    try:
      user = User.objects.create(email=request_data['email'], password=request_data['password'], first_name=request_data['firstname'],
                                 last_name=request_data['lastname'])
      return Response({"result" : 200})
    except:
      return Response({"result": 203})

class LogoutView(APIView):
  def post(self, request):
    request_data = request.data
    print dict(request.session)
    try:
      del request.session['email']
      return Response({"result" : 200})
    except:
      return Response({"result": 204})