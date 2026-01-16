from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from .models import Enquiry
from .serializers import EnquirySerializer


class EnquiryViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Enquiry
    POST: Public (anyone can submit enquiry)
    GET/PUT/PATCH/DELETE: Admin only
    """
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['status', 'department']
    search_fields = ['first_name', 'email', 'phone', 'department']
    ordering_fields = ['created_at', 'status']
    ordering = ['-created_at']

    def get_permissions(self):
        """Allow public POST, require auth for other operations"""
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]

    def create(self, request, *args, **kwargs):
        """Create new enquiry"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({
            'success': True,
            'message': 'Enquiry submitted successfully',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)

    @action(detail=True, methods=['patch'], permission_classes=[IsAuthenticated])
    def update_status(self, request, pk=None):
        """Update enquiry status"""
        enquiry = self.get_object()
        new_status = request.data.get('status')
        
        if new_status not in dict(Enquiry.STATUS_CHOICES):
            return Response(
                {'error': 'Invalid status'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        enquiry.status = new_status
        enquiry.save()
        
        return Response({
            'success': True,
            'message': 'Status updated successfully',
            'data': EnquirySerializer(enquiry).data
        })
