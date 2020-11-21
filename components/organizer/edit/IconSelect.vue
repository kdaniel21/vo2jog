<template>
  <v-select v-model="selectedIcon" :options="options" label="name">
    <template #option="{ icon }">
      <selected-icon :icon="icon" />
    </template>

    <template #selected-option="{ icon }">
      <selected-icon :icon="icon" />
    </template>
  </v-select>
</template>

<script>
import SelectedIcon from '@/components/organizer/edit/SelectedIcon';

export default {
  name: 'IconSelect',
  components: { SelectedIcon },
  props: {
    value: { type: Object, default: () => {} },
    options: {
      type: Array,
      default: () => [
        { icon: ['globe'], name: 'Website' },
        { icon: ['images'], name: 'Race Photos' },
        { icon: ['fab', 'facebook'], name: 'Facebook Page' },
        { icon: ['fab', 'instagram'], name: 'Instagram Page' },
        { icon: ['fab', 'flickr'], name: 'Flickr Album' },
        { icon: ['fab', 'youtube'], name: 'YouTube Channel' },
        { icon: ['fab', 'twitter'], name: 'Twitter' },
      ],
    },
  },
  computed: {
    selectedIcon: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style></style>
