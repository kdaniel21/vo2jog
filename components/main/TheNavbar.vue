<template>
  <b-navbar id="the-navbar" :transparent="isTransparent">
    <!-- BRAND -->
    <template #brand>
      <b-navbar-item> Racircuit </b-navbar-item>
      {{ isTransparent }}
    </template>
    <b-navbar-brand>
      <nuxt-link to="/" class="text-white">Racircuit</nuxt-link>
    </b-navbar-brand>

    <!-- ITEMS -->
    <template #end>
      <b-navbar-item tag="nuxt-link" to="search">
        <b-icon icon="search" />
        <span>Search</span>
      </b-navbar-item>

      <!-- BUTTONS -->
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button tag="nuxt-link" to="login" class="button is-primary">
            Login
          </b-button>

          <b-button
            tag="nuxt-link"
            to="organizers"
            class="button is-primary"
            outlined
          >
            Organizers
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
