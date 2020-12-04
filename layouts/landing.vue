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
};
</script>

<style>
/* CHANGE NAVBAR TO TRANSPARENT */
#main-navbar {
  background-color: #000 !important;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0)) !important;
  color: #fff !important;
}
.navbar-brand a {
  font-weight: 700 !important;
}
#navbar-toggle {
  color: #fff !important;
}
.nav-link {
  color: #fff !important;
  font-weight: 700 !important;
}
.nav-link:hover {
  text-decoration: underline !important;
}
</style>
