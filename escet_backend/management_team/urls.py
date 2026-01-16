from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ManagementMemberViewSet

router = DefaultRouter()
router.register(r'', ManagementMemberViewSet, basename='management')

urlpatterns = [
    path('', include(router.urls)),
]
