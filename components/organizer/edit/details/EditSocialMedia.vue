<template>
  <div id="edit-social-media">
    <h2 class="title">{{ $t('organizer.details.social_media') }}</h2>

    <social-media-list
      :items="selectedEvent.socialMedia"
      :create-function="addItem"
      :update-function="updateItem"
      :delete-function="showDeleteConfirm"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'EditSocialMedia',
  data() {
    return {
      editedItem: null,
    };
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
  },
  methods: {
    ...mapActions('organizer/events', [
      'addItem',
      'updateItem',
      'showDeleteConfirm',
    ]),
  },
};
</script>
