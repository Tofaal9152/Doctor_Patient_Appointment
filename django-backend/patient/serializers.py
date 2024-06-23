from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from patient.models import PatientProfile, Appointment
from allauth.account.models import EmailAddress


class PatientCustomRegistrationSerializer(RegisterSerializer):
    patient = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )  # by default allow_null = False
    name = serializers.CharField(required=True)
    profile_img = serializers.URLField(required=True)
    age = serializers.IntegerField(required=True)
    gender = serializers.CharField(required=True)

    def get_cleaned_data(self):
        data = super(PatientCustomRegistrationSerializer, self).get_cleaned_data()
        extra_data = {
            "name": self.validated_data.get("name", ""),
            "profile_img": self.validated_data.get("profile_img", ""),
            "age": self.validated_data.get("age", ""),
            "gender": self.validated_data.get("gender", ""),
        }
        data.update(extra_data)
        return data

    def save(self, request):
        user = super(PatientCustomRegistrationSerializer, self).save(request)
        user.save()
        patient = PatientProfile(
            patient=user,
            name=self.cleaned_data.get("name"),
            profile_img=self.cleaned_data.get("profile_img"),
            age=self.cleaned_data.get("age"),
            gender=self.cleaned_data.get("gender"),
        )
        patient.save()

        # Mark the email as verified
        email_address = EmailAddress.objects.get(user=user, email=user.email)
        email_address.verified = True
        email_address.save()

        return user


class PatientSerializer(serializers.ModelSerializer):
    patient = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        fields = "__all__"
        model = PatientProfile


class AppointmentSerializer(serializers.ModelSerializer):
    patient = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        exclude = ("emailed",)
        model = Appointment


class AppointmentDepthSerializer(serializers.ModelSerializer):
    patient = serializers.PrimaryKeyRelatedField(read_only=True)
    appointment_date = serializers.DateField(format="%d/%m/%Y")    

    class Meta:
        exclude = ("emailed",)
        model = Appointment
        depth = 1
