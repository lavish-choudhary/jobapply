from django.contrib import admin
from .models import Service

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'username', 'email','city','state','job', 'resume')
    readonly_fields = ('resume',)
