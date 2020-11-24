<template>
  <div id="description">
    <h2 class="mb-4">Event Description</h2>
    <ck-editor v-model="description" />

    <submit-button class="mt-3" @click="save" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import CkEditor from '@/components/organizer/edit/description/CkEditor';
import SubmitButton from '@/components/organizer/edit/SubmitButton';

export default {
  name: 'description',
  components: {
    CkEditor,
    SubmitButton,
  },
  mixins: [toaster],
  layout: 'organizer',
  middleware: ['auth', 'event-selected'],
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
