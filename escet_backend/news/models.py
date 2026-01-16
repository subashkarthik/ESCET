from django.db import models


class News(models.Model):
    """
    Model for news and announcements
    """
    CATEGORY_CHOICES = [
        ('Event', 'Event'),
        ('Seminar', 'Seminar'),
        ('Achievement', 'Achievement'),
        ('Notification', 'Notification'),
    ]

    title = models.CharField(max_length=300)
    description = models.TextField()
    date = models.CharField(max_length=50)  # Stored as formatted string like "OCT 24, 2024"
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    image = models.URLField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'news'
        ordering = ['-created_at']
        verbose_name = 'News'
        verbose_name_plural = 'News'

    def __str__(self):
        return self.title
