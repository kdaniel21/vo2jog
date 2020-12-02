<template>
  <div id="organizer-profile" class="d-flex flex-wrap justify-content-start">
    <b-avatar :src="organizer.avatar" size="lg" class="mr-2"></b-avatar>
    <div class="align-self-center">
      <h6 class="organizer-name my-0">{{ organizer.name }}</h6>
      <p class="organizer-motto my-0">{{ organizer.motto }}</p>
      <nuxt-link class="small my-0" :to="`/profiles/${organizer._id}`"
        >View Profile</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OrganizerProfile',
  computed: {
    ...mapState({
      organizer: state => state.events.viewedEvent.organizer,
    }),
  },
};
</script>

<style scoped>
.organizer-motto {
  font-size: 75%;
}
</style>
