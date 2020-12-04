<template>
  <b-navbar id="main-navbar" toggleable="md" variant="primary">
    <b-navbar-brand>
      <nuxt-link to="/" class="text-white">Racircuit</nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle id="navbar-toggle" target @click="toggleNavbar">
      <fa icon="bars" fixed-width />
    </b-navbar-toggle>

    <!-- NORMAL NAVBAR CONTENT -->
    <b-navbar-nav class="d-none d-md-flex ml-auto">
      <b-nav-item v-for="{ name, link } in navItems" :key="name" :to="link">
        {{ name }}
      </b-nav-item>
    </b-navbar-nav>

    <!-- TOGGLED NAVBAR CONTENT -->
    <div v-if="navOpen" id="main-menu" class="fixed-top" @click="toggleNavbar">
      <fa
        id="close-btn"
        class="h2 text-white cursor-pointer mt-3 mr-3 mt-md-5 mr-md-5"
        icon="times"
        fixed-width
      />
      <b-navbar-nav id="mobile-nav" class="w-100 text-center">
        <b-nav-item
          v-for="{ name, link } in navItems"
          :key="name"
          class="mobile-nav-item"
        >
          <nuxt-link
            :to="link"
            class="h2 text-center text-white text-decoration-none font-weight-bold mt-5 nav-item"
            >{{ name }}</nuxt-link
          >
        </b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      navOpen: false,
      navItems: [
        { name: 'Search', link: '/search' },
        { name: 'Organizers', link: '/organizers' },
        { name: 'Login', link: '/organizers/dashboard' },
      ],
    };
  },
  methods: {
    toggleNavbar() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style scoped>
#main-navbar {
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 60px;
}
#main-menu {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1000;
  transition: 0.5s;
  overflow: hidden;
}
#navbar-toggle,
#navbar-toggle:focus {
  border: none;
  outline: none;
}
#mobile-nav {
  position: relative;
  top: 25%;
}
.mobile-nav-item:hover {
  transform: scale(1.2);
  color: rgba(255, 255, 255, 0.5) !important;
}
#close-btn {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
