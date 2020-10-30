<template>
  <div>
    <organizer-sidebar @toggle-collapse="(val) => (isSidebarCollapsed = val)" />
    <div
      :class="[
        sidebarClass,
        'main',
        'd-flex',
        'flex-column',
        'justify-content-between',
      ]"
    >
      <div>
        <organizer-navbar />
        <b-container fluid>
          <Nuxt />
        </b-container>
      </div>
      <the-footer />
    </div>
  </div>
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
  data() {
    return {
      isSidebarCollapsed: false,
    };
  },
  computed: {
    sidebarClass() {
      return this.isSidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-open';
    },
  },
};
</script>

<style scoped>
.main {
  min-height: 100vh;
}
.sidebar-open {
  margin-left: 250px;
  width: calc(100vw - 250px);
}
.sidebar-collapsed {
  margin-left: 80px;
  width: calc(100vw - 80px);
}
</style>
