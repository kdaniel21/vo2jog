<template>
  <navbar :items="navItems" />
</template>

<script>
import Navbar from '@/components/navbars/Navbar';

export default {
  name: 'DefaultNavbar',
  components: {
    Navbar,
  },
  data() {
    return {
      navItems: [
        { text: 'Sign In', link: '/login' },
        { text: 'Sign Up', link: '/' },
        { text: 'Race Directors', link: '/organizers' },
      ],
    };
  },
};
</script>
