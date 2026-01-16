from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GalleryImageViewSet, GalleryVideoViewSet

router = DefaultRouter()
router.register(r'images', GalleryImageViewSet, basename='gallery-image')
router.register(r'videos', GalleryVideoViewSet, basename='gallery-video')

urlpatterns = [
    path('', include(router.urls)),
]
