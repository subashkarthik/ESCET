"""
URL configuration for escet_backend project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from django.http import JsonResponse

def health_check(request):
    """Health check endpoint"""
    return JsonResponse({
        'success': True,
        'message': 'ESCET Django Backend API is running',
        'version': '1.0.0'
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/health/', health_check, name='health-check'),
    
    # API endpoints
    path('api/auth/', include('authentication.urls')),
    path('api/departments/', include('departments.urls')),
    path('api/news/', include('news.urls')),
    path('api/facilities/', include('facilities.urls')),
    path('api/gallery/', include('gallery.urls')),
    path('api/management/', include('management_team.urls')),
    path('api/enquiries/', include('enquiries.urls')),
    path('api/contact/', include('contact.urls')),
    path('api/scholarships/', include('scholarships.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Customize admin site
admin.site.site_header = "ESCET Administration"
admin.site.site_title = "ESCET Admin Portal"
admin.site.index_title = "Welcome to ESCET Administration"
