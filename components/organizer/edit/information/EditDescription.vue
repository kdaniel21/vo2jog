<template>
  <div id="edit-description">
    <h2 class="title">{{ $t('common.description') }}</h2>

    <tiny-editor v-model="form.description" class="mb-3" />

    <button-right @click="onSave" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EditDescription',
  data() {
    return {
      form: {
        description: this.$store.state.organizer.events.selectedEvent
          .description,
      },
    };
  },
  created() {
    if (this.form.description)
      this.form.description = this.form.description.replace(/&lt;/g, '<');
  },
  methods: {
    ...mapActions('organizer/events', ['updateEvent']),
    onSave() {
      return this.updateEvent(this.form);
    },
  },
};
</script>

<style></style>
