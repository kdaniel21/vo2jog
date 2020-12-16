<template>
  <div id="event-page-description">
    <h2>Description</h2>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div id="description" v-html="parsedDescription"></div>
  </div>
</template>

<script>
export default {
  name: 'EventPageDescription',
  props: { description: { type: String, default: null } },
  computed: {
    parsedDescription() {
      return this.description.replace(/&lt;/g, '<');
    },
  },
};
</script>

<style>
#description > h2 {
  font-size: 1.5rem !important;
}
</style>
