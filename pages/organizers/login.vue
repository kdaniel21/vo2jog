<template>
  <b-row id="login" class="justify-content-center mt-5">
    <b-col cols="12" sm="10" xl="8" class="align-items-stretch">
      <b-card no-body>
        <b-card-body>
          <b-card-title>Login</b-card-title>
          <b-row>
            <b-col cols="12" sm="6" class="text-center align-self-center">
              <img
                :src="require('~/assets/svg/undraw-business_plan.svg')"
                style="width: 200px"
              />
            </b-col>
            <b-col class="border-left">
              <b-form @submit.prevent="login">
                <b-form-group label="Email" label-for="email-address">
                  <b-form-input
                    id="email-address"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Your e-mail address"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Password" label-for="password">
                  <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Your password"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" block variant="primary" pill>
                  Login
                </b-button>

                <hr />
                <div class="d-flex justify-content-end flex-wrap">
                  <nuxt-link to="/organizers/forgot-password" class="small">
                    Forgotten Password?
                  </nuxt-link>
                </div>
              </b-form>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import toaster from '@/mixins/toaster';

export default {
  name: 'Login',
  mixins: [toaster],
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      try {
        const { email, password } = this.form;
        await this.$auth.loginWith('local-organizer', {
          data: { email, password },
        });
      } catch ({ response }) {
        if (response.status === 403)
          return this.errorToast(
            'This account has not been approved yet. Please try again later or contact us!'
          );

        this.errorToast(
          'Your email or password is not correct. Please try again!'
        );
      }
    },
  },
};
</script>
