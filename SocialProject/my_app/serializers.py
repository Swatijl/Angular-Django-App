from rest_framework import serializers
from my_app.models import Notes,UserProfile
from django.contrib.auth import get_user_model


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id','mobile','name','password')
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = UserProfile(
            mobile=validated_data['mobile'],
            name=validated_data['name']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

# class UserRegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = get_user_model()
#         fields = ('name','mobile','password')
#
#     def create(self, validated_data):
#         """"create a new user with encrypted password & return it"""
#         return get_user_model().objects.create_user(**validated_data)
#
#
class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('id','user_profile','desc','status')
        extra_kwargs = {'user_profile':{'read_only':True}}