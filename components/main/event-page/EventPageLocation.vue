<template>
  <div id="event-page-location">
    <h2>Location</h2>

    <div>
      <span class="font-weight-bold">Address:</span>
      <span v-if="location.address.houseNumber">
        {{ `${location.address.houseNumber}.` }}
      </span>
      <span v-if="location.address.street">
        {{ `${location.address.street},` }}
      </span>
      <span v-if="location.address.city"> {{ location.address.city }}</span>
      <span v-if="location.address.postalCode">
        {{ `${location.address.postalCode},` }}
      </span>
      <span v-if="location.address.county">
        {{ `${location.address.county},` }}
      </span>
      <span v-if="location.address.state">
        {{ `${location.address.state},` }}
      </span>
      <span v-if="location.address.countryName">
        {{ location.address.countryName }}
      </span>
    </div>
    <div class="mb-3">
      <span class="font-weight-bold">Coordinates:</span>
      <span>{{ location.coordinates[1] }}&#176;,</span>
      <span>{{ location.coordinates[0] }}&#176;</span>
    </div>

    <location-map
      :lng="location.coordinates[0]"
      :lat="location.coordinates[1]"
    />
  </div>
</template>

<script>
export default {
  name: 'EventPageLocation',
  props: { location: { type: Object, default: null } },
};
</script>

<style></style>
