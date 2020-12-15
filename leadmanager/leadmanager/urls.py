from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include("frontend.urls")), # upewnic sie ze front sie laduje przed leads
    path('', include("leads.urls")),
]
