<template>
  <b-navbar id="navbar">
    <b-navbar-brand>
      <nuxt-link :to="brandLink">
        <slot name="brand"> {{ brand }} </slot>
      </nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="navItem in items" :key="navItem.text">
          <nuxt-link :to="navItem.link">{{ navItem.text }}</nuxt-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    brand: {
      type: String,
      default: 'Racircuit',
    },
    brandLink: {
      type: String,
      default: '/',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
