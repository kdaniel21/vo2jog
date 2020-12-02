<template>
  <filter-item id="location-filter" title="Location">
    <b-input
      id="location-search"
      v-model="locationInput"
      placeholder="Search Location"
      size="sm"
    ></b-input>
    <span class="radius">Radius: {{ locationRadius }}km</span>
    <b-input
      v-model="locationRadius"
      type="range"
      step="10"
      min="0"
      max="500"
    ></b-input>
    <div class="d-flex justify-content-between">
      <b-button variant="link" class="pl-0 pr-0">Nearby</b-button>
      <b-button variant="link" class="pl-0 pr-0">Apply</b-button>
    </div>
  </filter-item>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      locationInput: null,
      locationRadius: 20,
    };
  },
};
</script>

<style scoped></style>
