from rest_framework import routers
from .api import SnackViewSet, EatViewSet

router = routers.DefaultRouter()
router.register('api/snacks', SnackViewSet, 'snacks')
router.register('api/eats', EatViewSet, 'eats')

urlpatterns = router.urls