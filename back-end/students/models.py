from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.base_user import BaseUserManager

class ScoreCard(models.Model):
    student = models.ForeignKey(User)
    college = models.TextField()
    university = models.TextField()
    degree = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    other_details = models.CharField(max_length=500)
    sponsored = models.BooleanField(default=False)
    exam_type = models.TextField()
    exam_score = models.TextField()

    def _str_(self):
        return self.student.username

class StudentManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)


class Student(User):
    objects = StudentManager()

    class Meta:
        proxy = True
        ordering = ('first_name', )
