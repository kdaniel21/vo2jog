<template>
  <div id="make-public-button" class="btn-block-xs-only">
    <b-button
      v-b-modal.confirmation-modal
      variant="warning"
      class="btn-block-xs-only"
    >
      Make {{ public ? 'Private' : 'Public' }}
    </b-button>

    <confirmation-modal @ok="publish">
      <p>
        Are you sure you want to make this race public? This action will submit
        it to review and it will get published as soon as possible!
      </p>
    </confirmation-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import ConfirmationModal from '@/components/organizer/ConfirmationModal';

export default {
  name: 'MakePublicButton',
  components: { ConfirmationModal },
  mixins: [toaster],
  computed: {
    ...mapState({
      public: state => state.organizer.selectedEvent.public,
    }),
  },
  methods: {
    ...mapActions('organizer', ['updateEvent']),
    async publish() {
      try {
        await this.updateEvent({ public: !this.public });

        this.successToast(
          'Your event was submitted successfully! We will review it in 12-24 hours.'
        );
      } catch {
        this.errorToast('Could not submit event. Please try again!');
      }
    },
  },
};
</script>

<style></style>
