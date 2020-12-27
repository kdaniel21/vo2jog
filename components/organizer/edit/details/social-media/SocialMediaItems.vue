<template>
  <div id="social-media-items">
    <edit-list
      :items="socialMedia"
      @edit="item => $emit('edit', item)"
      @delete="onDelete"
    >
      <a
        slot-scope="{ item }"
        :href="item.link"
        target="_blank"
        class="is-inline-block"
      >
        {{ item.name }}
      </a>
    </edit-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SocialMediaItems',
  computed: {
    ...mapState({
      socialMedia: state => state.organizer.events.selectedEvent.socialMedia,
    }),
  },
  methods: {
    ...mapActions('organizer/events', ['showDeleteConfirm']),
    onDelete(item) {
      this.showDeleteConfirm({ name: 'socialMedia', itemId: item.id });
    },
  },
};
</script>

<style></style>
