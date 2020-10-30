<template>
  <b-row>
    <b-col cols="1">
      <organizer-sidebar />
    </b-col>
    <b-col>
      <organizer-navbar />
      <b-container>
        <Nuxt />
        <the-footer />
      </b-container>
    </b-col>
  </b-row>
</template>

<script>
import OrganizerNavbar from '@/components/navbars/OrganizerNavbar';
import OrganizerSidebar from '@/components/organizer/OrganizerSidebar';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    OrganizerNavbar,
    OrganizerSidebar,
    TheFooter,
  },
};
</script>
