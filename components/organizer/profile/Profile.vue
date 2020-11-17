<template>
  <b-row id="profile">
    <b-col cols="12" md="2">
      <b-avatar button :src="avatarPath" size="10rem"></b-avatar>
    </b-col>
    <b-col cols="12" md="10">
      <edit-profile
        v-if="editProfile"
        @edit="val => (editProfile = val)"
        @avatar="val => (avatar = val)"
      />
      <show-profile v-else @edit="val => (editProfile = val)" />
    </b-col>
  </b-row>
</template>

<script>
import ShowProfile from '@/components/organizer/profile/ShowProfile';
import EditProfile from '@/components/organizer/profile/EditProfile';

export default {
  name: 'Profile',
  components: {
    ShowProfile,
    EditProfile,
  },
  data() {
    return {
      editProfile: false,
      avatar: this.$store.state.auth.user.avatar,
    };
  },
  computed: {
    avatarPath() {
      return !this.avatar.startsWith('http')
        ? `${this.$config.staticUrl}/organizers/avatars/${this.avatar}`
        : this.avatar;
    },
  },
};
</script>
