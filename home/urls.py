from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('form/',views.form,name='form'),
    path('aboutUs/', views.aboutUs, name='about'),
    path('submit_form/', views.submit_form, name='submit_form'),
]