<template>
  <div id="event-page" class="container">
    <event-page-photo :img="event.image" />

    <event-page-basic-information class="column is-half" :event="event" />

    <event-page-description class="mt-2" :description="event.description" />

    <event-page-competitions class="mt-2" :competitions="event.competitions" />

    <event-page-organizer :organizer="event.organizer" />

    <event-page-faq :faq="event.faq" />

    <div class="columns is-desktop">
      <div class="column">
        <event-page-schedule :schedule="event.schedule" />
      </div>
      <div class="column">
        <event-page-documents :documents="event.documents" />
      </div>
    </div>

    <event-page-location
      v-if="event.location.coordinates.length"
      :location="event.location"
    />

    <!-- <h2>Sign Up Now!</h2> -->
    <event-page-bottom-bar :event="event" />
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
