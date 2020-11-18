<template>
  <div
    id="profile"
    class="d-flex flex-wrap justify-content-center justify-content-lg-start"
  >
    <b-avatar :src="avatarPath" size="10rem" class="mr-3"></b-avatar>
    <div class="profile-container">
      <edit-profile
        v-if="editProfile"
        @edit="val => (editProfile = val)"
        @avatar="val => (avatar = val)"
      />
      <show-profile v-else @edit="val => (editProfile = val)" />
    </div>
  </div>
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
      if (!this.avatar) return;

      return typeof this.avatar === 'object'
        ? URL.createObjectURL(this.avatar)
        : `${this.$config.staticUrl}/organizers/avatars/${this.avatar}`;
    },
  },
};
</script>

<style scoped>
.profile-container {
  width: clamp(calc(100% - 11rem), 30rem, 100vw);
}
</style>
