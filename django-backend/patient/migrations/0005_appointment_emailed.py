# Generated by Django 4.2.6 on 2024-06-18 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0004_alter_appointment_appointment_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='emailed',
            field=models.BooleanField(default=False),
        ),
    ]
