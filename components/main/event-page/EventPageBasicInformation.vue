<template>
  <div>
    <h3 class="font-weight-bold">{{ event.name }}</h3>
    <ul id="event-page-basic-information" class="list-unstyled">
      <li class="h5">
        <fa icon="map-marker-alt" fixed-width />
        <span>{{ event.location.address.label }}</span>
      </li>

      <li class="h5">
        <fa icon="calendar-alt" fixed-width />
        <span>{{ $dateFns.format(event.startDate, 'cccc, dd.MM.yyyy') }}</span>
      </li>

      <li class="h5">
        <fa icon="users" fixed-width />
        <nuxt-link :to="`/o/${event.organizer.id}`">
          {{ event.organizer.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EventPageBasicInformation',
  props: {
    event: { type: Object, default: null },
  },
  computed: {},
};
</script>

<style></style>
