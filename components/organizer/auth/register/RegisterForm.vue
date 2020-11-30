<template>
  <b-form id="register-form" @submit.prevent="register">
    <form-group
      label="Name"
      label-for="name-input"
      description="This name will appear on event pages."
      :validator="$v.form.name"
    >
      <b-form-input
        id="name-input"
        v-model="form.name"
        slot-scope="{ attrs, listeners }"
        placeholder="Name of your organizer company"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <form-group
      label="Email"
      label-for="email-input"
      :validator="$v.form.email"
    >
      <b-form-input
        id="email-input"
        v-model="form.email"
        slot-scope="{ attrs, listeners }"
        placeholder="Email address"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <form-group
      label="Password"
      label-for="password-input"
      :validator="$v.form.password"
    >
      <b-form-input
        id="password-input"
        v-model="form.password"
        slot-scope="{ attrs, listeners }"
        type="password"
        placeholder="Password"
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
        type="password"
        placeholder="Password again"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <b-form-checkbox v-model="form.terms"
      >I accept the terms of use.</b-form-checkbox
    >

    <submit-button
      text="Register"
      class="mt-3"
      submit
      :disabled="$v.form.$anyError || !form.terms"
    />
  </b-form>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';
import { alphaNumWhiteDiacritic } from '@/plugins/vuelidate/custom-validators';
import toaster from '@/mixins/toaster';
import SubmitButton from '@/components/organizer/edit/SubmitButton';

export default {
  name: 'RegisterForm',
  components: { SubmitButton },
  mixins: [toaster],
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        passwordConfirm: null,
        terms: false,
      },
    };
  },
  validations: {
    form: {
      name: { required, alphaNumWhiteDiacritic },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      passwordConfirm: {
        required,
        minLength: minLength(8),
        passwordConfirmMatch: sameAs(form => form.password),
      },
      terms: { required },
    },
  },
  methods: {
    async register() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      try {
        await this.$axios.post('/api/organizers/register', { ...this.form });

        this.toast(
          'Successful Registration',
          'Registered successfully! We will process your registration and email you in 48 hours!',
          { delay: 5000, variant: 'success' }
        );
        setTimeout(() => this.$router.push('/'), 5000);
      } catch {
        this.errorToast('Could not register. Please try again!');
      }
    },
  },
};
</script>
