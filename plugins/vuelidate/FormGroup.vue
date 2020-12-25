<template>
  <b-field
    :label="label"
    :custom-class="customClass"
    :type="type"
    :message="firstErrorMessage"
    v-bind="$attrs"
  >
    <template #label>
      <slot name="label" />
    </template>
    <slot />
  </b-field>
</template>

<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor';

export default {
  name: 'FormGroup',
  extends: singleErrorExtractorMixin,
  computed: {
    type() {
      if (this.hasErrors) return 'is-danger';

      return this.isValid ? 'is-success' : null;
    },
    customClass() {
      if (this.hasErrors) return 'has-text-danger';

      return this.isValid ? 'has-text-success' : null;
    },
  },
};
</script>
