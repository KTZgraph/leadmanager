from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # upewnic sie ze front sie laduje przed leads
    path('', include("frontend.urls")),
    path('', include("leads.urls")),
    path('', include("account.urls")),
]
