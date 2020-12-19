<template>
  <b-navbar id="the-navbar" :transparent="isTransparent">
    <!-- BRAND -->
    <template #brand>
      <b-navbar-item>{{ $t('navbar.brand') }}</b-navbar-item>
    </template>
    <!-- ITEMS -->
    <template #end>
      <b-navbar-item tag="nuxt-link" to="search">
        <b-icon icon="search" />
        <span>{{ $t('navbar.search') }}</span>
      </b-navbar-item>

      <!-- BUTTONS -->
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button tag="nuxt-link" to="login" class="button is-primary">
            {{ $t('navbar.login') }}
          </b-button>

          <b-button
            tag="nuxt-link"
            to="organizers"
            class="button is-primary"
            outlined
          >
            {{ $t('navbar.organizers') }}
          </b-button>
        </div>
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
