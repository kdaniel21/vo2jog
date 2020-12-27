<template>
  <b-button
    id="link-input"
    :type="linkButton.type"
    class="ml-1"
    :icon-left="linkButton.icon"
    @click="showLinkDialog"
  >
    {{ linkButton.text }}
  </b-button>
</template>

<script>
export default {
  name: 'LinkInput',
  props: {
    value: { type: String, default: null },
    isValid: { type: Boolean, default: null },
  },
  computed: {
    linkButton() {
      const type = 'is-primary is-light';
      if (!this.value)
        return {
          text: this.$t('organizer.common.enter_link'),
          icon: 'link',
          type,
        };
      if (!this.isValid)
        return {
          text: this.$t('organizer.shared.invalid_link'),
          icon: 'exclamation',
          type: 'is-danger is-light',
        };

      return {
        text: this.$t('organizer.shared.link_added'),
        icon: 'check',
        type,
      };
    },
  },
  methods: {
    showLinkDialog() {
      this.$buefy.dialog.prompt({
        title: this.$t('organizer.shared.add_link'),
        message: this.$t('organizer.shared.enter_link'),
        hasIcon: !!this.icon,
        icon: this.icon,
        iconPack: this.iconPack,
        inputAttrs: {
          placeholder: this.$t('organizer.shared.link_placeholder'),
          required: true,
        },
        trapFocus: true,
        cancelText: this.$t('common.cancel'),
        confirmText: this.$t('common.add'),
        onConfirm: link => this.$emit('input', link),
      });
    },
  },
};
</script>

<style></style>
