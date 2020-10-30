<template>
  <div>
    <slot name="navbar">
      <default-navbar />
    </slot>
    <b-container>
      <Nuxt />
      <hr />
      <the-footer />
    </b-container>
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
