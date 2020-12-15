<template>
  <div id="select-distance">
    <h2>Select Distance</h2>

    <select-grid :items="distanceItems" />
  </div>
</template>

<script>
export default {
  name: 'SelectDistance',
  data() {
    return {
      distances: ['10K', 'Olympic', 'Time Trial', 'Half Marathon', 'Ironman'],
    };
  },
  computed: {
    distanceItems() {
      return this.distances.map(distance => ({
        name: distance,
        image: require(`~/assets/img/landing/distances/${distance.toLowerCase()}.jpg`),
        to: `/search?distance=${distance}`,
      }));
    },
  },
};
</script>
