<template>
  <edit-list-text-input v-model="phone" v-bind="$data" :is-valid="isValid" />
</template>

<script>
export default {
  name: 'EditListPhoneInput',
  props: {
    value: { type: String, default: null },
    isValid: { type: Boolean, default: true },
  },
  data() {
    return {
      validationMessages: {
        normal: this.$t('organizer.shared.add_phone'),
        invalid: this.$t('organizer.shared.invalid_phone'),
        valid: this.$t('organizer.shared.phone_added'),
      },
      placeholder: this.$t('organizer.shared.phone_placeholder'),
      icon: 'phone',
      title: this.$t('organizer.shared.add_phone'),
      message: this.$t('organizer.shared.enter_phone'),
    };
  },
  computed: {
    phone: {
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
