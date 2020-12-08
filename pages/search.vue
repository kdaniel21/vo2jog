<template>
  <div id="search">
    <event-list-item :event="event" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.get('/api/events/5fa4e65399fadd4f0ebf1d8c');
    return { event: res.data.data };
  },
};
</script>
