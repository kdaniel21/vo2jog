<template>
  <div id="event-page">
    <event-page-photo :img="event.image" />
    <event-page-basic-information :event="event" />
    <hr />

    <event-page-description :description="event.description" />
    <hr />

    <event-page-competitions :competitions="event.competitions" />
    <hr />

    <event-page-organizer :organizer="event.organizer" />
    <hr />

    <event-page-faq :faq="event.faq" />
    <hr />

    <b-row>
      <b-col cols="12" md="6">
        <event-page-schedule :schedule="event.schedule" />
      </b-col>
      <b-col>
        <event-page-documents :documents="event.documents" />
      </b-col>
    </b-row>
    <hr />

    <event-page-location :location="event.location" />
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
