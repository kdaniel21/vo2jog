<template>
  <div v-if="profile" id="profile-information" class="flex-grow-1">
    <h1>{{ profile.name }}</h1>
    <h5>
      <fa icon="map-marker-alt" fixed-width />
      <span>Vienna, AUT</span>
    </h5>
    <p class="mt-3">{{ profile.motto }}</p>
    <p class="mt-3">{{ profile.description }}</p>
    <hr />

    <!-- <profile-card class="mt-3 mt-md-3" :profile="profile" /> -->
    <profile-events />
    <hr />
    <profile-contacts :data="profile.contactPeople" />
  </div>
</template>

<script>
export default {
  name: 'ProfileInformation',
  props: { profile: { type: Object, default: null } },
};
</script>

<style scoped>
#profile-information {
  width: min(27rem, 60vw);
}
</style>
