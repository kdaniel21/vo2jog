<template>
  <b-navbar id="the-navbar" :transparent="isTransparent">
    <!-- BRAND -->
    <template #brand>
      <b-navbar-item tag="nuxt-link" to="/">
        {{ $t('navbar.brand') }}
      </b-navbar-item>
    </template>
    <!-- ITEMS -->
    <template #end>
      <b-navbar-item tag="nuxt-link" to="search">
        <b-icon icon="search" />
        <span>{{ $t('common.search') }}</span>
      </b-navbar-item>

      <b-navbar-dropdown>
        <template #label>
          <b-icon icon="briefcase" />
          <span>{{ $t('navbar.organizers') }}</span>
        </template>
        <b-navbar-item tag="nuxt-link" to="/login">
          <b-icon icon="sign-in-alt" />
          <span>{{ $t('common.login') }}</span>
        </b-navbar-item>
        <b-navbar-item>
          <b-icon icon="handshake" class="mr-1" />
          <span>{{ $t('navbar.become_partner') }}</span>
        </b-navbar-item>
        <b-navbar-item>
          <b-icon icon="info-circle" />
          <span>{{ $t('navbar.about_us') }}</span>
        </b-navbar-item>
      </b-navbar-dropdown>

      <!-- BUTTONS -->
      <b-navbar-item>
        <b-button
          type="is-primary"
          tag="nuxt-link"
          to="login"
          icon-left="sign-in-alt"
        >
          {{ $t('common.login') }}
        </b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      transparentRoutes: ['/'],
    };
  },
  computed: {
    isTransparent() {
      return this.transparentRoutes.includes(this.$route.path);
    },
  },
};
</script>
