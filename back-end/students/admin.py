from django.contrib import admin
from .models import ScoreCard

class ScoreCardAdmin(admin.ModelAdmin):
  list_display = ('student', 'college', 'university', 'degree', 'start_date', 'end_date', 'other_details', 'sponsored', 'exam_type', 'exam_score')

# Register your models here.
admin.site.register(ScoreCard, ScoreCardAdmin)