<template>
  <navbar :brand-link="brandLink" :items="navItems">
    <!-- BRAND -->
    <template v-slot:brand>
      <b-navbar-brand>
        Racircuit
        <span id="brand-title-mini">Organizer Dashboard</span>
      </b-navbar-brand>
    </template>
  </navbar>
</template>

<script>
import Navbar from '@/components/navbars/Navbar';

export default {
  name: 'OrganizerNavbar',
  components: {
    Navbar,
  },
  data() {
    return {
      brandLink: '/organizers',
      navItems: [
        { text: 'menu1', link: '/organizers' },
        { text: 'menu2', link: '/organiers' },
      ],
    };
  },
};
</script>

<style scoped>
#brand-title-mini {
  font-size: 50%;
}
</style>
