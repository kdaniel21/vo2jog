<template>
  <b-form id="forgot-password-form" @submit.prevent="sendPasswordReset">
    <form-group
      class="email-group"
      :validator="$v.form.email"
      label="Email"
      label-for="email-input"
    >
      <b-form-input
        id="email-input"
        v-model="form.email"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <b-button type="submit" variant="primary" class="btn-block-xs-only"
      >Reset Password</b-button
    >
  </b-form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'ForgotPasswordForm',
  data() {
    return {
      form: {
        email: null,
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    async sendPasswordReset() {
      try {
        const { email } = this.form;
        await this.$axios.post('/api/organizers/forgot-password', { email });

        this.successToast(
          `Password reset email sent successfully! It will arrive within a few minutes.`
        );
        this.$emit('sent');
      } catch {
        this.errorToast(
          'Could not send password reset email! Please try again.'
        );
      }
    },
  },
};
</script>

<style scoped>
.email-group {
  max-width: 30rem;
}
</style>
