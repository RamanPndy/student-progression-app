# -*- coding: utf-8 -*-
# Generated by Django 1.11.22 on 2019-07-16 18:19
from __future__ import unicode_literals

from django.db import migrations
import students.models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
            ],
            options={
                'ordering': ('first_name',),
                'proxy': True,
                'indexes': [],
            },
            bases=('auth.user',),
            managers=[
                ('objects', students.models.StudentManager()),
            ],
        ),
    ]
