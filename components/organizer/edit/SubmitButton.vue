<template>
  <div id="submit-button" class="d-flex justify-content-end">
    <b-button
      :variant="variant"
      :type="submit ? 'submit' : 'button'"
      :disabled="disabled"
      class="btn-block-xs-only"
      @click="$emit('click')"
      >{{ text }}</b-button
    >
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    text: { type: String, default: 'Save' },
    submit: { type: Boolean, default: false },
    variant: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
  },
};
</script>
