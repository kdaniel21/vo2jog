<template>
  <b-navbar id="organizer-navbar" :mobile-burger="false">
    <template #brand>
      <b-navbar-item class="is-hidden-desktop">
        <b-button
          type="is-primary is-light"
          icon-left="bars"
          @click="$emit('toggle-sidebar')"
        />
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/organizers/dashboard">
        {{ $t('navbar.brand') }}
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-dropdown>
        <template #label>{{ user.name }}</template>

        <b-navbar-item tag="nuxt-link" to="/organizers/profile">
          <b-icon icon="user-circle" />
          <span>{{ $t('organizer.navbar.public_profile') }}</span>
        </b-navbar-item>

        <b-navbar-item tag="nuxt-link" to="/organizers/account">
          <b-icon icon="user-cog" />
          <span>{{ $t('organizer.navbar.account') }}</span>
        </b-navbar-item>

        <b-navbar-item @click="$auth.logout">
          <b-icon icon="sign-out-alt" />
          <span>{{ $t('organizer.navbar.sign_out') }}</span>
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-item>
        <b-image id="avatar" :src="user.avatar" rounded />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'OrganizerNavbar',
  computed: {
    user() {
      return this.$auth.user;
    },
  },
};
</script>

<style>
#organizer-navbar #avatar > img {
  width: 1.75rem;
  height: 1.75rem;
}
</style>
