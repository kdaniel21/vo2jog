<template>
  <div id="edit-profile-avatar">
    <image-upload
      ref="image-upload"
      v-model="form.avatar"
      class="column is-narrow"
      @upload="onSave"
    >
      <b-image id="profile-avatar" slot-scope="{ img }" :src="img" rounded />
    </image-upload>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EditProfileAvatar',
  data() {
    return {
      form: {
        avatar: this.$auth.user.avatar,
      },
    };
  },
  methods: {
    ...mapActions('organizer/profile', ['updateProfile']),
    async onSave() {
      if (!this.form.avatar) return;

      const data = new FormData();
      data.append('avatar', this.form.avatar, this.form.avatar.filename);
      await this.updateProfile(data);

      this.$refs['image-upload'].resetState();
    },
  },
};
</script>

<style></style>
