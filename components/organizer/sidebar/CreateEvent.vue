<template>
  <div id="create-event">
    <slot>
      <b-button v-b-modal.create-modal variant="link">Create Event</b-button>
    </slot>

    <b-modal
      id="create-modal"
      title="Create Event"
      ok-title="Create"
      @ok="createEvent(input)"
    >
      <b-form-group
        label="Event name"
        label-for="name-input"
        description="You can change this later."
      >
        <b-form-input
          id="name-input"
          v-model="input.name"
          required
          placeholder="Budapest Marathon"
        ></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateEvent',
  data() {
    return {
      input: {
        name: null,
      },
    };
  },
  methods: {
    ...mapActions('organizer', ['createEvent']),
  },
};
</script>

<style></style>
