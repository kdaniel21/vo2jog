<template>
  <b-row id="login" class="justify-content-center mb-5">
    <b-col cols="12" xl="8" class="align-items-stretch">
      <b-card no-body>
        <b-card-body>
          <b-card-title>Login</b-card-title>
          <b-row>
            <b-col class="text-center align-self-center">
              <img :src="img" style="width: 200px" />
            </b-col>
            <b-col class="border-left">
              <b-form @submit.prevent="login">
                <b-form-group label="Email" label-for="email-address">
                  <b-form-input
                    id="email-address"
                    v-model="email"
                    type="email"
                    required
                    placeholder="Your e-mail address"
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Password" label-for="password">
                  <b-form-input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                    placeholder="Your password"
                  ></b-form-input>
                </b-form-group>

                <b-form-group class="text-center">
                  <b-form-radio-group
                    id="role-select"
                    v-model="role"
                    :options="roles"
                    buttons
                    button-variant="secondary"
                  ></b-form-radio-group>
                </b-form-group>

                <b-button type="submit" block variant="primary" pill>
                  Login
                </b-button>

                <hr />
                <div class="d-flex justify-content-between flex-wrap">
                  <nuxt-link to="/" class="small">
                    Forgotten Password?
                  </nuxt-link>
                  <nuxt-link to="/" class="small">
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
import { mapMutations, mapActions } from 'vuex';
import toaster from '@/mixins/toaster';

export default {
  name: 'Login',
  mixins: [toaster],
  data() {
    return {
      role: 'organizers',
      roles: [
        { text: `I'm organizing`, value: 'organizers' },
        { text: `I'm racing`, value: 'users' },
      ],
      email: null,
      password: null,
    };
  },
  computed: {
    img() {
      const svg =
        this.role === 'organizers'
          ? 'undraw-business_plan'
          : 'undraw-finish_line';

      return require(`~/assets/svg/${svg}.svg`);
    },
  },
  methods: {
    ...mapMutations('organizerAuth', ['setAccessToken']),
    ...mapActions('organizerAuth', ['getUser']),
    async login() {
      try {
        const { email, password } = this;
        const loginStrategy =
          this.role === 'organizers' ? 'local-organizer' : 'local-user';

        await this.$auth.loginWith(loginStrategy, {
          data: { email, password },
        });
      } catch (err) {
        console.log(err);
        this.errorToast(
          'Your email or password is not correct. Please try again!'
        );
      }
    },
  },
};
</script>
