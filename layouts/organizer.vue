<template>
  <div id="organizer-layout">
    <organizer-navbar @toggle-sidebar="toggleSidebar" />
    <organizer-sidebar
      :is-sidebar-visible="isSidebarVisible"
      @toggle-sidebar="toggleSidebar"
    />

    <div class="px-2">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import windowSize from '~/mixins/window-size';

export default {
  mixins: [windowSize],
  middleware: ['auth', 'select-event'],
  data() {
    return {
      isSidebarOpened: false,
    };
  },
  computed: {
    isSidebarVisible() {
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
