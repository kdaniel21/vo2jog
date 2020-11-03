<template>
  <vsb-layout :items="navItems">
    <template v-slot:toggle-icon
      ><fa
        v-b-toggle="'sidebar'"
        icon="bars"
        class="h3 d-md-none mt-1"
        style="vertical-align: none"
    /></template>

    <template v-slot:navbar-content> <organizer-navbar /> </template>

    <template v-slot:dropdown-icon="{ item, index }">
      <fa
        v-if="item.children"
        v-b-toggle="`nav-item-${index}`"
        icon="caret-down"
      />
    </template>
  </vsb-layout>
</template>

<script>
import OrganizerNavbar from '@/components/navbars/OrganizerNavbar';

export default {
  components: {
    OrganizerNavbar,
  },
  data() {
    return {
      isSidebarCollapsed: false,
      navItems: [
        {
          name: 'Race',
          children: [
            {
              link: '/',
              text: 'Analytics',
              icon: { tag: 'fa', attributes: { icon: 'chart-line' } },
            },
            {
              link: '/',
              text: 'Signups',
              icon: { tag: 'fa', attributes: { icon: 'user' } },
            },
            {
              text: 'Edit',
              icon: { tag: 'fa', attributes: { icon: 'edit' } },
              children: [
                { text: 'Basic Information', link: '/' },
                { text: 'Description' },
                { text: 'Schedule' },
                { text: 'Q&A' },
                { text: 'Location' },
                { text: 'Competitions' },
                { text: 'Social Media' },
              ],
            },
          ],
        },
      ],
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
