<template>
  <div id="edit-credentials">
    <h2 class="title">{{ $t('organizer.account.edit_credentials') }}</h2>

    <form-group
      :validator="$v.form.currentPassword"
      :label="$t('organizer.account.current_password')"
      horizontal
    >
      <b-input
        v-model="form.currentPassword"
        type="password"
        password-reveal
        @input="$v.form.currentPassword.$touch"
      />
    </form-group>

    <form-group
      :validator="$v.form.email"
      :label="$t('common.email')"
      horizontal
    >
      <b-input v-model="form.email" @input="$v.form.email.$touch" />
    </form-group>

    <form-group
      :validator="$v.form.password"
      :label="$t('organizer.login.password')"
      horizontal
    >
      <b-input
        v-model="form.password"
        type="password"
        password-reveal
        @input="$v.form.password.$touch"
      />
    </form-group>

    <form-group
      :validator="$v.form.passwordConfirm"
      :label="$t('organizer.account.password_confirm')"
      horizontal
    >
      <b-input
        v-model="form.passwordConfirm"
        type="password"
        password-reveal
        @input="$v.form.passwordConfirm.$touch"
      />
    </form-group>

    <button-right @click="onSave">
      {{ $t('organizer.account.update_credentials') }}
    </button-right>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {
  required,
  minLength,
  sameAs,
  requiredIf,
  email,
} from 'vuelidate/lib/validators';

export default {
  name: 'EditCredentials',
  data() {
    return {
      form: {
        currentPassword: null,
        email: this.$auth.user.email,
        password: null,
        passwordConfirm: null,
      },
    };
  },
  validations: {
    form: {
      currentPassword: { required },
      email: { email },
      password: { minLength: minLength(8) },
      passwordConfirm: {
        required: requiredIf(function (form) {
          return !!form.password;
        }),
        sameAsPassword: sameAs('password'),
      },
    },
  },
  methods: {
    ...mapActions('organizer/profile', ['showUpdateCredentialsConfirm']),
    onSave() {
      this.showUpdateCredentialsConfirm(this.form);
    },
  },
};
</script>

<style></style>
