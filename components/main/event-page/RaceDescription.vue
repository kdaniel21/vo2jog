<template>
  <div id="race-description" no-body>
    <h3 class="text-primary">{{ viewedEvent.name }}</h3>
    <p v-html="escapedDescription"></p>

    <hr />
    <faq />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RaceDescription',
  computed: {
    ...mapState('events', ['viewedEvent']),
    escapedDescription() {
      return this.viewedEvent.description.replace(/&lt;/g, '<');
    },
  },
};
</script>

<style></style>
