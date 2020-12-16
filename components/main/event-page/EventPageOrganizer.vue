<template>
  <div id="event-page-organizer">
    <h2>Organizer</h2>

    <div class="d-flex">
      <b-avatar :src="organizer.avatar" size="min(100px, 15vw)"></b-avatar>

      <div class="d-flex flex-column justify-content-center ml-3">
        <h4>{{ organizer.name }}</h4>
        <p class="text-muted text-truncate">
          {{ organizer.description.substring(0, 100) + '...' }}
        </p>
        <div>
          <b-button variant="primary" pill :to="`/o/${organizer.id}`"
            >View Profile
          </b-button>
          <b-button
            variant="secondary"
            pill
            :href="organizer.socialMedia[0].link"
            target="_blank"
          >
            {{ `Visit ${organizer.socialMedia[0].name}` }}
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPageOrganizer',
  props: { organizer: { type: Object, default: null } },
};
</script>

<style></style>
