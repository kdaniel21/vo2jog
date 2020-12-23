<template>
  <div id="login" class="container is-flex is-justify-content-center">
    <section class="card mt-6">
      <div class="card-content">
        <h1 class="title">
          <b-icon icon="briefcase" />
          {{ $t('organizer_login.organizer_login') }}
        </h1>

        <form-group :label="$t('common.email')" :validator="$v.form.email">
          <b-input
            v-model="form.email"
            :placeholder="$t('common.email_address')"
            icon="envelope"
            @input="$v.form.email.$touch()"
          />
        </form-group>

        <form-group :validator="$v.form.password">
          <template #label>
            <span>{{ $t('organizer_login.password') }}</span>
            <nuxt-link
              to="/forgot-password"
              class="is-size-7 is-pulled-right"
              tabindex="-1"
            >
              {{ $t('organizer_login.forgot_password') }}
            </nuxt-link>
          </template>

          <b-input
            v-model="form.password"
            type="password"
            password-reveal
            :placeholder="$t('organizer_login.password')"
            icon="lock"
            @input="$v.form.password.$touch()"
          />
        </form-group>

        <b-button type="is-primary" class="is-fullwidth" @click="login">
          {{ $t('organizer_login.sign_in') }}
        </b-button>

        <div class="mt-6">
          <span>{{ $t('organizer_login.no_account') }}</span>
          <nuxt-link to="/">{{ $t('organizer_login.get_started') }}</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  middleware: ['auth'],
  auth: 'guest',
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    async login() {
      try {
        const { email, password } = this.form;
        await this.$auth.loginWith('local-organizer', {
          data: { email, password },
        });
        this.$toast.success(this.$t('organizer_login.success'));
      } catch {
        this.$toast.error(this.$t('organizer_login.error'));
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: min(450px, 100%);
}
</style>
