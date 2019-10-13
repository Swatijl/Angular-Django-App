
from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
# Create your models here.


class UserProfileManager(BaseUserManager):
    def create_user(self, mobile, name, password=None):
        if not mobile:
            raise ValueError('Users must have a mobile number')

        user = self.model(mobile=mobile, name=name)

        user.set_password(password)
        user.save(using=self._db)

        return user


class UserProfile(AbstractBaseUser,PermissionsMixin):
    mobile = models.CharField(max_length=10,unique=True)
    name = models.CharField(max_length=200)

    objects = UserProfileManager()
    USERNAME_FIELD = 'mobile'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.name

class Notes(models.Model):
    user_profile = models.ForeignKey('UserProfile', on_delete=models.CASCADE)
    # notes_id = models.IntegerField(primary_key=True)
    desc = models.CharField(max_length=200)
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.status

