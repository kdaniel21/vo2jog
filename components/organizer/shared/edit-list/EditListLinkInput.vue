<template>
  <edit-list-text-input v-model="link" v-bind="$data" :is-valid="isValid" />
</template>

<script>
export default {
  name: 'EditListLinkInput',
  props: {
    value: { type: String, default: null },
    isValid: { type: Boolean, default: null },
  },
  data() {
    return {
      validationMessages: {
        normal: this.$t('organizer.shared.add_link'),
        invalid: this.$t('organizer.shared.invalid_link'),
        valid: this.$t('organizer.shared.link_added'),
      },
      placeholder: this.$t('organizer.shared.link_placeholder'),
      icon: 'link',
      title: this.$t('organizer.shared.add_link'),
      message: this.$t('organizer.shared.enter_link'),
    };
  },
  computed: {
    link: {
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
