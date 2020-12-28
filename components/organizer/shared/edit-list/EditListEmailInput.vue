<template>
  <edit-list-text-input v-model="email" v-bind="$data" :is-valid="isValid" />
</template>

<script>
export default {
  name: 'EditListEmailInput',
  props: {
    value: { type: String, default: null },
    isValid: { type: Boolean, default: null },
  },
  data() {
    return {
      validationMessages: {
        normal: this.$t('organizer.shared.add_email'),
        invalid: this.$t('organizer.shared.invalid_email'),
        valid: this.$t('organizer.shared.email_added'),
      },
      placeholder: this.$t('organizer.shared.email_placeholder'),
      icon: 'envelope',
      title: this.$t('organizer.shared.add_email'),
      message: this.$t('organizer.shared.enter_email'),
    };
  },
  computed: {
    email: {
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
