<template>
  <div id="organizer-layout">
    <organizer-navbar @toggle-sidebar="toggleSidebar" />
    <organizer-sidebar
      :is-sidebar-visible="isSidebarVisible"
      @toggle-sidebar="toggleSidebar"
    />

    <Nuxt />
  </div>
</template>

<script>
import windowSize from '~/mixins/window-size';

export default {
  mixins: [windowSize],
  data() {
    return {
      isSidebarOpened: false,
    };
  },
  computed: {
    isSidebarVisible() {
      console.log('visiblity', this.width > 1024 ? true : this.isSidebarOpened);
      return this.width > 1024 ? true : this.isSidebarOpened;
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpened = !this.isSidebarOpened;
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  #organizer-layout {
    /* Reduced sidebar width */
    margin-left: 80px;
  }
}
</style>
