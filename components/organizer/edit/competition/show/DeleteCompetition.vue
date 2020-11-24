<template>
  <div id="delete-button">
    <b-button
      v-b-modal.confirmation-modal
      variant="outline-primary"
      class="delete-btn"
    >
      <fa icon="trash" />
    </b-button>

    <!-- CONFIRMATION MODAL -->
    <confirmation-modal @confirm="deleteCompetition">
      <p>
        Are you sure that you want to delete this competition? This action is
        permament and not irreversible!
      </p>
    </confirmation-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import ConfirmationModal from '@/components/organizer/ConfirmationModal';
export default {
  name: 'DeleteButton',
  components: { ConfirmationModal },
  mixins: [toaster],
  props: {
    id: { type: String, default: null },
  },
  methods: {
    ...mapActions('organizer', ['deleteItem']),
    async deleteCompetition() {
      try {
        await this.deleteItem({ name: 'competitions', itemId: this.id });
        this.successToast('Competition deleted successfully!');
      } catch {
        this.errorToast('Could not delete competition');
      }
    },
  },
};
</script>

<style>
.delete-btn {
  top: 0;
  right: 0;
  position: absolute;
  opacity: 0.5;
  transition: all 0.3s;
}
.delete-btn:hover {
  opacity: 1;
}
</style>
