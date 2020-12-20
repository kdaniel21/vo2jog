<template>
  <section class="card">
    <div class="card-content">
      <h1 class="title">{{ event.name }}</h1>
      <ul class="is-size-5">
        <li>
          <b-icon icon="map-marker-alt" />
          <span>{{ event.location.address.label }}</span>
        </li>
        <li>
          <b-icon icon="calendar-alt" />
          <span>
            {{ $dateFns.format(event.startDate, 'cccc, dd.MM.yyyy') }}
          </span>
        </li>
        <li>
          <b-icon icon="users" />
          <nuxt-link :to="`/o/${event.organizer.id}`">
            {{ event.organizer.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventPageBasicInformation',
  props: {
    event: { type: Object, default: null },
  },
};
</script>

<style></style>
