<template>
  <div id="show-profile">
    <div class="d-flex justify-content-between mb-2">
      <slot name="header">
        <h3>Profile</h3>
        <b-button variant="link" @click="$emit('edit', true)"> Edit </b-button>
      </slot>
    </div>

    <div
      v-for="prop in ['name', 'motto']"
      :key="prop"
      class="d-flex justify-content-between mb-1"
    >
      <span
        :class="[
          user[prop] ? 'font-weight-bold' : 'text-muted',
          'text-capitalize',
        ]"
      >
        {{ prop }}:
      </span>
      <slot name="content" :prop="prop">
        <span v-if="user[prop]">{{ user[prop] }}</span>
      </slot>
    </div>
    <div class="d-flex justify-content-between">
      <span
        :class="[
          user.description ? 'font-weight-bold' : 'text-muted',
          'text-capitalize',
        ]"
        >Description:
      </span>
      <slot name="description">
        <p class="w-50 text-right">{{ user.description }}</p>
      </slot>
    </div>

    <slot></slot>
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
