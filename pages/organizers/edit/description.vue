<template>
  <div id="description">
    <h2 class="mb-4">Event Description</h2>
    <ck-editor v-model="description" />

    <b-button
      variant="primary"
      class="mt-3 float-right btn-block-xs-only"
      @click="save"
      >Save</b-button
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import CkEditor from '@/components/organizer/edit/description/CkEditor';

export default {
  name: 'description',
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
  components: { CkEditor },
  mixins: [toaster],
  data() {
    return {
      description: this.$store.state.organizer.events.selectedEvent.description,
    };
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    async save() {
      try {
        await this.updateEvent({ descripton: this.description });
        this.successToast('Successfully updated event description.');
      } catch {
        this.errorToast(
          'Something went wrong. Could not update description. Please try again!'
        );
      }
    },
  },
};
</script>
