<template>
  <div id="organizer-navbar" style="display: contents">
    <nuxt-link :to="brandLink">
      <b-navbar-brand class="ml-3 ml-md-0">
        Racircuit
        <span id="brand-title-mini" class="d-none d-md-inline"
          >Organizer Dashboard</span
        >
      </b-navbar-brand>
    </nuxt-link>

    <b-navbar-nav v-if="$auth.user" class="ml-auto align-items-center">
      <div class="mr-md-3">
        <fa icon="question-circle" class="mr-2" />
        <nuxt-link to="/organizers/profile">
          <fa icon="user" class="mr-2 text-dark" />
        </nuxt-link>
        <logout />
      </div>
      <span class="d-none d-md-inline mr-2">
        {{ $auth.user.name }}
      </span>
      <b-avatar :src="avatarPath" class="d-none d-md-inline"></b-avatar>
    </b-navbar-nav>
  </div>
</template>

<script>
import Logout from '@/components/organizer/navbar/Logout';

export default {
  name: 'OrganizerNavbar',
  components: {
    Logout,
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
  computed: {
    avatarPath() {
      return `${this.$config.staticUrl}/organizers/avatars/${this.$auth.user.avatar}`;
    },
  },
};
</script>

<style scoped>
#brand-title-mini {
  font-size: 50%;
}
</style>
