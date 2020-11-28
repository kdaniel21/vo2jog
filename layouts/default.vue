<template>
  <div class="min-vh-100 d-flex flex-column">
    <slot name="navbar">
      <default-navbar />
    </slot>
    <b-container fluid class="flex-grow-1 d-flex flex-column p-3 p-md-5">
      <Nuxt class="align-self-stretch flex-grow-1" />
    </b-container>
    <!-- <Nuxt class="flex-grow-1 pb-3" /> -->
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
