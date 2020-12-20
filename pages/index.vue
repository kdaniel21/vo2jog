<template>
  <div id="landing">
    <landing-search-hero />
    <landing-search-area />

    <div class="container px-1">
      <select-carousel namespace="main" :items="sports" />

      <select-carousel namespace="distance" :items="distances" />

      <popular-event-list />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get('/api/events/5fa4e65399fadd4f0ebf1d8c');

    return { event: res.data.data };
  },
  data() {
    return {
      distances: ['10k', 'olympic', 'time_trial', 'half_marathon', 'ironman'],
      sports: ['running', 'cycling', 'triathlon', 'swimming', 'other'],
    };
  },
};
</script>

<style scoped>
#landing {
  margin-top: -56px;
}
</style>
