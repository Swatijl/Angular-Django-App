from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import status,filters
from rest_framework.views import APIView
from my_app.models import Notes,UserProfile
from my_app.serializers import UserRegisterSerializer,NotesSerializer
from my_app.permissions import UpdateOwnProfile,PostOwnStatus
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from django.contrib.auth import authenticate,login,logout

from django.views.decorators.csrf import csrf_exempt

# @csrf_exempt
# def get_data(request):
# 	data = Login.objects.all()
# 	if request.method == 'GET':
# 		serializer = LoginSerializer(data, many=True)
# 		return JsonResponse(serializer.data, safe=False)

#  @api_view(['GET', 'POST'])
# def register(request):
#
#
#     permission_classes = ()
# class CreateUserView(generics.CreateAPIView):
#     """Create a new user in the system"""
#     serializer_class = UserRegisterSerializer

# class RegisterView(APIView):
#     def post(self, request, ):
#         serializer = UserRegisterSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterViewset(viewsets.ModelViewSet):
    serializer_class = UserRegisterSerializer
    queryset = UserProfile.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (UpdateOwnProfile,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('mobile','name',)


class LoginViewset(viewsets.ViewSet):
    serializer_class= AuthTokenSerializer
    def create(self,request):
        return ObtainAuthToken().post(request)

class NotesViewset(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = NotesSerializer
    queryset = Notes.objects.all()
    permission_classes = (PostOwnStatus,IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user_profile=self.request.user)