<template>
  <div id="sport-select">
    <h2>Select Sport</h2>

    <select-grid :items="sportItems" />
  </div>
</template>

<script>
export default {
  name: 'SportSelect',
  data() {
    return {
      sports: ['Running', 'Cycling', 'Triathlon', 'Swimming', 'Other'],
    };
  },
  computed: {
    sportItems() {
      return this.sports.map(sport => ({
        name: sport,
        image: require(`@/assets/img/landing/categories/${sport.toLowerCase()}.jpg`),
        to: `/search?sport=${sport}`,
      }));
    },
  },
};
</script>
