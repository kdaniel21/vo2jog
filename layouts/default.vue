<template>
  <div class="main d-flex justify-content-between flex-column">
    <div>
      <slot name="navbar">
        <default-navbar />
      </slot>
      <b-container fluid>
        <Nuxt />
      </b-container>
    </div>
    <the-footer />
  </div>
</template>

<script>
import DefaultNavbar from '@/components/navbars/DefaultNavbar';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'Default',
  components: {
    DefaultNavbar,
    TheFooter,
  },
};
</script>

<style scoped>
.main {
  min-height: 100vh;
}
</style>
