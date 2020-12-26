<template>
  <div id="description">
    <h2 class="title">{{ $t('common.description') }}</h2>

    <tiny-editor v-model="form.description" class="mb-3" />

    <button-right @click="onSave" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Description',
  data() {
    return {
      form: {
        description: this.$store.state.organizer.events.selectedEvent.description.replace(
          /&lt;/g,
          '<'
        ),
      },
    };
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
