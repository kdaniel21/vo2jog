<template>
  <div id="social-media">
    <div v-for="platform in socialMedia" :key="platform.name">
      <a :href="platform.link" target="_blank" class="text-dark">
        <fa
          :icon="platform.icon.length > 1 ? platform.icon : platform.icon[0]"
          fixed-width
        />
        <span>{{ platform.name }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SocialMedia',
  computed: {
    ...mapState({
      socialMedia: state => state.events.viewedEvent.socialMedia,
    }),
  },
};
</script>

<style></style>
