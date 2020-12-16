<template>
  <div id="event-page">
    <h2>{{ event.name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'EventPage',
  async asyncData({ params: { id }, $axios }) {
    const res = await $axios.get(`/api/events/${id}`);

    return { event: res.data.data };
  },
};
</script>

<style></style>
