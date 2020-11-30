<template>
  <b-row align-h="center">
    <b-col cols="12" sm="10" md="8" lg="6" xl="4">
      <b-card id="register">
        <b-card-title>Register</b-card-title>
        <b-card-body>
          <register-form />
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import RegisterForm from '@/components/organizer/auth/register/RegisterForm';

export default {
  components: { RegisterForm },
};
</script>

<style></style>
