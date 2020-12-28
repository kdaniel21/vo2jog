<template>
  <section class="card">
    <div class="card-content">
      <h2 class="title is-4">{{ $t('common.organizer') }}</h2>

      <div class="columns">
        <div id="avatar" class="column is-narrow container">
          <b-image :src="organizer.avatar" ratio="1by1" rounded />
        </div>
        <div class="column has-text-centered-mobile">
          <h4 class="is-size-4 has-text-weight-medium">{{ organizer.name }}</h4>
          <p class="is-size-6 is-italic mb-4">{{ organizer.motto }}</p>

          <!-- BUTTONS -->
          <b-button
            v-if="profileUrl"
            type="is-primary"
            tag="nuxt-link"
            :to="profileUrl"
          >
            {{ $t('event.view_profile') }}
          </b-button>
          <b-button
            v-if="primarySocialMedia"
            type="is-primary is-light"
            tag="a"
            :href="primarySocialMedia.link"
            target="_blank"
            icon-right="external-link-alt"
            class="is-capitalized"
          >
            {{ `${$t('event.visit')} ${primarySocialMedia.name}` }}
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventPageOrganizer',
  props: { organizer: { type: Object, default: null } },
  computed: {
    profileUrl() {
      if (!this.organizer) return;

      return `/o/${this.organizer.id}`;
    },
    primarySocialMedia() {
      if (!this.organizer || !this.organizer.socialMedia.length) return;
      const { socialMedia } = this.organizer;

      return {
        ...socialMedia[0],
        icon:
          socialMedia[0].icon.length > 1
            ? socialMedia[0].icon
            : socialMedia[0].icon[0],
      };
    },
  },
};
</script>

<style scoped>
#avatar {
  width: 150px;
  height: 150px;
}
</style>
