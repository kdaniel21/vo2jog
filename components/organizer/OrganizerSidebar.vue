<template>
  <sidebar-menu
    :menu="menu"
    :collapsed="collapsed"
    width="250px"
    width-collapsed="80px"
    theme="white-theme"
    @toggle-collapse="onToggleCollapse"
  >
    <template v-slot:dropdown-icon>
      <fa icon="caret-down" />
    </template>

    <template v-slot:toggle-icon>
      <fa icon="bars" />
    </template>
  </sidebar-menu>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';

export default {
  name: 'OrganizerSidebar',
  components: {
    SidebarMenu,
  },
  data() {
    return {
      collapsed: false,
      menu: [
        {
          header: true,
          title: 'Race',
          hiddenOnCollapse: false,
        },
        {
          href: '/',
          title: 'Analytics',
          icon: {
            element: 'fa',
            attributes: { icon: 'chart-line' },
          },
        },
        {
          href: '/',
          title: 'Signups',
          icon: {
            element: 'fa',
            attributes: { icon: 'user' },
          },
        },
        {
          title: 'Edit',
          icon: {
            element: 'fa',
            attributes: { icon: 'edit' },
          },
          child: [
            { href: '/', title: 'Basic Information' },
            { href: '/', title: 'Description' },
            { href: '/', title: 'Schedule' },
            { href: '/', title: 'Q&A' },
            { href: '/', title: 'Location' },
            { href: '/', title: 'Competitions' },
            { href: '/', title: 'Social Media' },
          ],
        },
      ],
    };
  },
  watch: {
    collapsed(value) {
      this.$emit('toggle-collapse', value);
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.collapsed = window.innerWidth <= 767;
    },
    onToggleCollapse(collapsed) {
      this.collapsed = collapsed;
    },
  },
};
</script>

<style>
/* .b-sidebar {
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 200px !important;
  background: lightblue;
} */
.v-sidebar-menu {
  border-right: 1px solid lightgray;
}
.vsm--icon {
  background-color: #fff !important;
  height: 18px !important;
}
.vsm--item_open > * > .vsm--icon {
  background-color: #4285f4 !important;
}
</style>
