<template>
  <b-button
    id="edit-list-text-input"
    :type="button.type"
    class="ml-1"
    :icon-left="button.icon"
    @click="showDialog"
  >
    {{ button.text }}
  </b-button>
</template>

<script>
export default {
  name: 'EditListTextInput',
  props: {
    value: { type: String, default: null },
    isValid: { type: Boolean, default: null },
    validationMessages: { type: Object, default: null },
    placeholder: { type: String, default: null },
    icon: { type: String, default: null },
    iconPack: { type: String, default: null },
    message: { type: String, default: null },
    title: { type: String, default: null },
  },
  computed: {
    button() {
      const messages = this.validationMessages;

      if (!this.value)
        return {
          text: messages.normal,
          icon: 'link',
          type: 'is-primary is-light',
        };
      if (!this.isValid)
        return {
          text: messages.invalid,
          icon: 'exclamation',
          type: 'is-danger is-light',
        };

      return {
        text: messages.valid,
        icon: 'check',
        type: 'is-success is-light',
      };
    },
  },
  methods: {
    showDialog() {
      this.$buefy.dialog.prompt({
        title: this.title,
        message: this.message,
        hasIcon: !!this.icon,
        icon: this.icon,
        iconPack: this.iconPack,
        inputAttrs: {
          placeholder: this.placeholder,
          required: true,
        },
        trapFocus: true,
        cancelText: this.$t('common.cancel'),
        confirmText: this.$t('common.add'),
        onConfirm: val => this.$emit('input', val),
      });
    },
  },
};
</script>

<style></style>
