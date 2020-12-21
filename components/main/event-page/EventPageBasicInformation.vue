<template>
  <section class="card">
    <div class="card-content">
      <h1 class="title mb-0">{{ event.name }}</h1>
      <category-list :categories="categories" class="mb-4" />

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

      <div class="is-flex is-justify-content-end mt-2">
        <b-button type="is-primary" class="is-fullwidth-mobile">
          {{ $t('event.sign_up_now') }}
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import displayEvent from '~/mixins/main/display-event';

export default {
  name: 'EventPageBasicInformation',
  mixins: [displayEvent],
  props: {
    event: { type: Object, default: null },
  },
};
</script>

<style></style>
