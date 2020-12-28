<template>
  <div id="edit-profile-social-media">
    <h2 class="title">{{ $t('organizer.profile.social_media') }}</h2>

    <social-media-list
      :items="socialMedia"
      :create-function="addProfileItem"
      :update-function="updateProfileItem"
      :delete-function="deleteProfileItem"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EditProfileSocialMedia',
  computed: {
    socialMedia() {
      return this.$auth.user.socialMedia;
    },
  },
  methods: {
    ...mapActions('organizer/profile', [
      'addProfileItem',
      'updateProfileItem',
      'deleteProfileItem',
    ]),
  },
};
</script>

<style></style>
