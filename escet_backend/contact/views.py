from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Contact
from .serializers import ContactSerializer


class ContactViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Contact messages
    POST: Public
    GET/PUT/PATCH/DELETE: Admin only
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'email', 'subject', 'message']
    ordering_fields = ['created_at', 'is_read']
    ordering = ['-created_at']

    def get_permissions(self):
        """Allow public POST, require auth for other operations"""
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]

    def create(self, request, *args, **kwargs):
        """Create new contact message"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({
            'success': True,
            'message': 'Message sent successfully',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['patch'], permission_classes=[IsAuthenticated])
    def mark_as_read(self, request, pk=None):
        """Mark contact message as read"""
        contact = self.get_object()
        contact.is_read = True
        contact.save()
        return Response({
            'success': True,
            'message': 'Marked as read',
            'data': ContactSerializer(contact).data
        })
