<template>
  <div id="social-media-items">
    <edit-list
      :items="socialMediaWithIcons"
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
import socialMediaList from '@/mixins/social-media-list';

export default {
  name: 'SocialMediaItems',
  mixins: [socialMediaList],
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
