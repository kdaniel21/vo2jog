<template>
  <b-list-group id="document-list">
    <b-list-group-item
      v-for="doc in documentsWithIcons"
      :key="doc.name"
      class="d-flex justify-content-between"
    >
      <a :href="doc.url" target="_blank">
        <fa :icon="doc.icon.icon" />
        <span>{{ doc.name }}</span>
      </a>

      <!-- DELETE BUTTON -->
      <delete-button @delete="deleteDocument(doc.id)" />
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import toaster from '@/mixins/toaster';
import documentList from '@/mixins/document-list';
import DeleteButton from '@/components/organizer/edit/DeleteButton';

export default {
  name: 'DocumentList',
  components: { DeleteButton },
  mixins: [toaster, documentList],
  computed: {
    ...mapState({
      documents: state => state.organizer.events.selectedEvent.documents,
    }),
  },
  methods: {
    ...mapActions('organizer/events', ['deleteItem']),
    async deleteDocument(id) {
      try {
        await this.deleteItem({ name: 'documents', itemId: id });
        this.successToast('Document removed successfully!');
      } catch {
        this.errorToast('Could not delete document. Please try again!');
      }
    },
  },
};
</script>

<style></style>
