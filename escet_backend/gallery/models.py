from django.db import models


class GalleryImage(models.Model):
    """
    Model for gallery images
    """
    CATEGORY_CHOICES = [
        ('campus', 'Campus'),
        ('events', 'Events'),
        ('labs', 'Laboratories'),
        ('sports', 'Sports'),
        ('cultural', 'Cultural'),
        ('achievements', 'Achievements'),
    ]

    title = models.CharField(max_length=200)
    url = models.URLField(max_length=500)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'gallery_images'
        ordering = ['-created_at']
        verbose_name = 'Gallery Image'
        verbose_name_plural = 'Gallery Images'

    def __str__(self):
        return self.title


class GalleryVideo(models.Model):
    """
    Model for gallery videos
    """
    title = models.CharField(max_length=200)
    thumbnail = models.URLField(max_length=500)
    url = models.URLField(max_length=500, help_text='YouTube embed URL')
    duration = models.CharField(max_length=10, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'gallery_videos'
        ordering = ['-created_at']
        verbose_name = 'Gallery Video'
        verbose_name_plural = 'Gallery Videos'

    def __str__(self):
        return self.title
