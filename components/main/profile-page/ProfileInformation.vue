<template>
  <div v-if="profile" class="card">
    <div class="card-content">
      <h1 class="title">{{ profile.name }}</h1>
      <h3 class="subtitle">
        <b-icon icon="map-marker-alt" />
        <span>Vienna, AUT</span>
      </h3>
      <p class="is-italic">{{ profile.motto }}</p>
      <p class="mt-2">{{ profile.description }}</p>
    </div>

    <!-- RATINGS -->
    <!-- <footer class="card-footer"></footer> -->
  </div>
</template>

<script>
export default {
  name: 'ProfileInformation',
  props: { profile: { type: Object, default: null } },
};
</script>
