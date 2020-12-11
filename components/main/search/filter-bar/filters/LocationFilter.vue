<template>
  <div id="location-filter">
    <location-search v-model="location" />

    <button-row />
  </div>
</template>

<script>
export default {
  name: 'LocationFilter',
  data() {
    return {
      location: null,
    };
  },
};
</script>

<style></style>
