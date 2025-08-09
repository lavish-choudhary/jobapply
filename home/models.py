from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=15)
    city = models.CharField(max_length=25)
    state = models.CharField(max_length=25)
    job = models.CharField(max_length=50)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)  # <-- Added

    def __str__(self):
        return self.name

# Create your models here.
