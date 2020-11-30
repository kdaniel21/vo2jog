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
import Faq from '@/components/race-finder/event-page/Faq';

export default {
  name: 'RaceDescription',
  components: {
    Faq,
  },
  computed: {
    ...mapState('events', ['viewedEvent']),
    escapedDescription() {
      return this.viewedEvent.description.replace(/&lt;/g, '<');
    },
  },
};
</script>

<style></style>
