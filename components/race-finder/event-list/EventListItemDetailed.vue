<template>
  <b-card id="event-list-item-detailed">
    <b-card-img src="https://picsum.photos/1200" class="rounded-2" />
  </b-card>
</template>

<script>
export default {
  name: 'EventListItemDetailed',
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
