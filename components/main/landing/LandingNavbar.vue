<template>
  <b-navbar id="landing-navbar" type="dark">
    <b-navbar-brand>
      <h3 class="font-weight-bold">Racircuit</h3>
    </b-navbar-brand>

    <b-navbar-nav class="ml-auto font-weight-bold">
      <b-nav-item><span class="text-white">Search</span></b-nav-item>
      <b-nav-item><span class="text-white">Organizers</span></b-nav-item>
      <b-nav-item><span class="text-white">Login</span></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'LandingNavbar',
};
</script>

<style scoped>
#landing-navbar {
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 80px;

  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
}
</style>
