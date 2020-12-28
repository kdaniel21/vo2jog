<template>
  <div id="event-page" class="container">
    <event-page-hero :event="event" />
    <event-page-basic-information class="is-hidden-tablet" :event="event" />

    <event-page-description class="mt-2" :description="event.description" />

    <event-page-competitions class="mt-2" :competitions="event.competitions" />

    <event-page-organizer :organizer="event.organizer" />

    <event-page-faq :faq="event.faq" />

    <div class="columns is-desktop">
      <event-page-schedule class="column" :event="event" />
      <event-page-documents class="column" :documents="event.documents" />
    </div>

    <event-page-location
      v-if="event.location.coordinates.length"
      :location="event.location"
    />

    <h2 class="title is-4 px-5 pt-5">{{ $t('event.sign_up_now') }}</h2>
    <event-page-bottom-bar :event="event" class="mb-4" />
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
