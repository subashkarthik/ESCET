from django.db import models


class Scholarship(models.Model):
    """
    Model for scholarship information
    """
    name = models.CharField(max_length=200)
    description = models.TextField()
    eligibility = models.TextField()
    amount = models.CharField(max_length=100, help_text='Scholarship amount or percentage')
    application_deadline = models.CharField(max_length=100, blank=True, null=True)
    link = models.URLField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'scholarships'
        ordering = ['name']
        verbose_name = 'Scholarship'
        verbose_name_plural = 'Scholarships'

    def __str__(self):
        return self.name
