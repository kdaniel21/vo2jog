<template>
  <div id="social-media">
    <div class="d-flex justify-content-between">
      <h3>Social Media Platforms</h3>
      <b-button variant="link" @click="newSocialMedia">New</b-button>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
      laudantium voluptates nisi obcaecati error mollitia. Vitae ea numquam
      molestias sunt, sapiente harum consectetur maxime eum quas tenetur in
      nihil.
    </p>

    <social-media-table ref="table" />
  </div>
</template>

<script>
import SocialMediaTable from '@/components/organizer/profile/social-media/SocialMediaTable';

export default {
  name: 'SocialMedia',
  components: { SocialMediaTable },
  methods: {
    newSocialMedia() {
      if (this.$refs.table) this.$refs.table.newSocialMedia();
    },
  },
};
</script>

<style></style>
