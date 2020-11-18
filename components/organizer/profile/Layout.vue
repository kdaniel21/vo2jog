<template>
  <div id="show-profile">
    <div class="d-flex justify-content-between mb-3">
      <h3>{{ title }}</h3>
      <div>
        <b-button variant="link" @click="$emit(edit ? 'cancel' : 'edit')">
          {{ edit ? 'Cancel' : 'Edit' }}
        </b-button>
        <b-button v-if="edit" variant="link" @click="$emit('save')">
          Save
        </b-button>
      </div>
    </div>

    <b-row v-for="prop in props" :key="prop" class="mb-2">
      <b-col cols="12" md="4" class="text-capitalize font-weight-bold">
        {{ makeHumanReadable(prop) }}
      </b-col>
      <b-col>
        <slot name="input" :prop="prop">
          {{ data ? data[prop] : null }}
        </slot>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ShowProfile',
  props: {
    title: { type: String, default: null },
    data: { type: Object, default: () => {} },
    props: { type: Array, default: () => [] },
    edit: { type: Boolean, default: false },
  },
  methods: {
    makeHumanReadable(name) {
      const words = name.match(/[A-Za-z][a-z]*/g) || [];

      return words.join(' ');
    },
  },
};
</script>
