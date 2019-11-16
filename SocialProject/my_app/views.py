from rest_framework import viewsets
from rest_framework import status,filters
from my_app.models import Notes,UserProfile
from my_app.serializers import UserRegisterSerializer,NotesSerializer
from my_app.permissions import UpdateOwnProfile,PostOwnStatus
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.serializers import AuthTokenSerializer

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