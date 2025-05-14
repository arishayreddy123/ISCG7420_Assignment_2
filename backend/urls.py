from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from reservations.views import RoomViewSet, ReservationViewSet

router = DefaultRouter()
router.register(r'rooms', RoomViewSet)
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
