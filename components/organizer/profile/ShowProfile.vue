<template>
  <div id="show-profile">
    <div class="d-flex justify-content-between mb-3">
      <slot name="header">
        <h3>Profile</h3>
        <b-button variant="link" @click="$emit('edit', true)"> Edit </b-button>
      </slot>
    </div>

    <b-row v-for="prop in ['name', 'motto']" :key="prop" class="mb-2">
      <b-col cols="12" md="4" class="text-capitalize font-weight-bold">
        {{ prop }}
      </b-col>
      <b-col>
        <slot name="input" :prop="prop">
          {{ user[prop] }}
        </slot>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col cols="12" md="4" class="font-weight-bold">Description</b-col>
      <b-col>
        <slot name="description">
          {{ user.description }}
        </slot>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ShowProfile',
  computed: {
    ...mapState('auth', ['user']),
  },
};
</script>
