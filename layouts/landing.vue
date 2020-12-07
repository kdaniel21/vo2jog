<template>
  <default-layout>
    <b-container fluid class="p-0 flex-grow-1">
      <Nuxt />
    </b-container>
  </default-layout>
</template>

<script>
import DefaultLayout from './default';

export default {
  components: { DefaultLayout },
  head: {
    bodyAttrs: {
      class: 'transparent-nav',
    },
  },
};
</script>

<style>
/* CHANGE NAVBAR TO TRANSPARENT */
.transparent-nav .navbar-margin {
  padding-top: 0 !important;
}
.transparent-nav #the-navbar {
  background-color: #000 !important;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0)) !important;
  color: #fff !important;
}
.transparent-nav .navbar-brand a {
  font-weight: 700 !important;
}
.transparent-nav #navbar-toggle {
  color: #fff !important;
}
.transparent-nav .nav-link {
  color: #fff !important;
  font-weight: 700 !important;
}
.transparent-nav .nav-link:hover {
  text-decoration: underline !important;
}
</style>
