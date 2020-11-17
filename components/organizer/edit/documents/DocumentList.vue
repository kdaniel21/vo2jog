<template>
  <b-list-group id="document-list">
    <b-list-group-item
      v-for="doc in documents"
      :key="doc.name"
      class="d-flex justify-content-between"
    >
      <a :href="doc.url" target="_blank">
        <fa :icon="doc.icon.icon" />
        <span>{{ doc.name }}</span>
      </a>

      <!-- DELETE BUTTON -->
      <delete-button @delete="deleteDocument(doc._id)" />
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import DeleteButton from '@/components/organizer/edit/DeleteButton';

export default {
  name: 'DocumentList',
  components: { DeleteButton },
  mixins: [toaster],
  data() {
    return {
      defaultIcon: { icon: 'file' },
      iconMap: [
        { icon: 'file-word', extensions: ['.doc', '.docx', '.odt'] },
        { icon: 'file-pdf', extensions: ['.pdf'] },
        { icon: 'file-excel', extensions: ['.xls', '.xlsx', '.ods'] },
        { icon: 'file-powerpoint', extensions: ['.ppt', '.pptx'] },
      ],
    };
  },
  computed: {
    documents() {
      const { documents } = this.$store.state.organizer.selectedEvent;

      return documents.map(doc => {
        const url = `${this.$config.staticUrl}/events/docs/${doc.file}`;
        const extension = '.' + doc.file.split('.').pop();
        const icon =
          this.iconMap.find(icon => icon.extensions.includes(extension)) ||
          this.defaultIcon;

        return { ...doc, icon, url };
      });
    },
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
