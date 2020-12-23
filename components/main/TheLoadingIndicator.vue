<template>
  <b-loading id="the-loading-indicator" v-model="isLoading"></b-loading>
</template>

<script>
export default {
  name: 'TheLoadingIndicator',
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    start() {
      this.isLoading = true;
    },
    finish() {
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
