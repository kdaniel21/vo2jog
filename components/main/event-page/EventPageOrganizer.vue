<template>
  <div id="event-page-organizer">
    <h2>Organizer</h2>

    <div
      class="d-flex flex-wrap justify-content-center justify-content-sm-start"
    >
      <!-- AVATAR -->
      <b-avatar :src="organizer.avatar" size="100px"></b-avatar>

      <!-- SHORT PROFILE INFORMATION -->
      <div class="d-flex flex-column justify-content-center ml-3 flex-grow-1">
        <h4>{{ organizer.name }}</h4>
        <p class="text-muted">
          {{ organizer.motto }}
        </p>
        <!-- PROFILE BUTTONS -->
        <div class="d-flex flex-wrap">
          <b-button
            variant="primary"
            class="btn-block-xs-only mb-2 mb-sm-0 mr-sm-2"
            pill
            :to="`/o/${organizer.id}`"
          >
            <fa icon="users" fixed-width />
            <span>View Profile</span>
          </b-button>

          <b-button
            variant="secondary"
            pill
            :href="organizer.socialMedia[0].link"
            target="_blank"
            class="btn-block-xs-only"
          >
            <fa
              fixed-width
              :icon="
                organizer.socialMedia[0].icon.length > 1
                  ? organizer.socialMedia[0].icon
                  : organizer.socialMedia[0].icon[0]
              "
            />
            <span>{{ `Visit ${organizer.socialMedia[0].name}` }}</span>
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

<style scoped>
#event-page-organizer {
  width: 100%;
  max-width: 100%;
}
</style>
