from rest_framework import routers
from .api import SnackViewSet

router = routers.DefaultRouter()
router.register('api/snacks', SnackViewSet, 'snacks')

urlpatterns = router.urls