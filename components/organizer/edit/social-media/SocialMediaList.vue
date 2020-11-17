<template>
  <div id="social-media-list">
    <h3>Current Social Media References</h3>
    <b-list-group>
      <b-list-group-item
        v-for="{ icon, name, link, _id } in socialMedia"
        :key="name"
        class="d-flex justify-content-between align-items-center"
      >
        <span>
          <fa :icon="icon.length > 1 ? icon : icon[0]" />
          <span>{{ name }}</span>
          <a :href="link" target="_blank" class="font-italic small">
            {{ link }}
          </a>
        </span>

        <!-- DELETE BUTTON -->
        <delete-button
          @delete="deleteItem({ name: 'socialMedia', itemId: _id })"
        />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DeleteButton from '@/components/organizer/edit/DeleteButton';

export default {
  name: 'SocialMediaList',
  components: { DeleteButton },
  computed: {
    ...mapState({
      socialMedia: state => state.organizer.selectedEvent.socialMedia,
    }),
  },
  methods: {
    ...mapActions('organizer/events', ['deleteItem']),
  },
};
</script>

<style></style>
