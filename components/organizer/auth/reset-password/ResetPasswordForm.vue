<template>
  <b-form id="reset-password-form" @submit.prevent="resetPassword">
    <form-group
      label="Password"
      label-for="password-input"
      :validator="$v.form.password"
    >
      <b-form-input
        id="password-input"
        v-model="form.password"
        slot-scope="{ attrs, listeners }"
        placeholder="New Password"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <form-group
      label="Password Confirm"
      label-for="password-confirm-input"
      :validator="$v.form.passwordConfirm"
    >
      <b-form-input
        id="password-confirm-input"
        v-model="form.passwordConfirm"
        slot-scope="{ attrs, listeners }"
        placeholder="Your Password Again"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <b-button variant="primary" type="Submit" class="btn-block-xs-only"
      >Set Password</b-button
    >
  </b-form>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators';
import toaster from '@/mixins/toaster';

export default {
  name: 'ResetPasswordForm',
  mixins: [toaster],
  props: {
    token: { type: String, default: null },
  },
  data() {
    return {
      form: {
        password: null,
        passwordConfirm: null,
      },
    };
  },
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8),
      },
      passwordConfirm: {
        required,
        minLength: minLength(8),
        sameAs: sameAs(form => form.password),
      },
    },
  },
  methods: {
    async resetPassword() {
      try {
        const { token } = this;
        const { password, passwordConfirm } = this.form;
        const data = { token, password, passwordConfirm };
        await this.$axios.post('/api/auth/reset-password', data);

        this.successToast('Password successfully changed. Now you can log in!');
        setTimeout(() => this.$router.push('/organizers/login'), 2000);
      } catch {
        this.errorToast('Password could not be changed! Please try again.');
      }
    },
  },
};
</script>

<style scoped>
.form-group {
  max-width: 30rem;
}
</style>
