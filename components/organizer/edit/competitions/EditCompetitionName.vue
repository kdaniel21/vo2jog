<template>
  <div id="edit-competition-name">
    <form-group
      :validator="$v.form.name"
      :label="$t('common.name')"
      label-position="on-border"
      grouped
    >
      <b-input
        v-model="form.name"
        :placeholder="$t('common.name')"
        @input="$v.form.name.$touch"
      />
      <p class="control buttons">
        <b-button tag="nuxt-link" to="/organizers/edit/competitions">
          {{ $t('common.cancel') }}
        </b-button>
        <b-button type="is-primary" @click="$emit('save')">
          {{ $t('common.save') }}
        </b-button>
      </p>
    </form-group>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { alphaNumWhiteDiacritic } from '@/plugins/vuelidate/custom-validators';

export default {
  name: 'EditCompetitionName',
  props: {
    value: { type: String, default: null },
  },
  data() {
    return {
      form: {
        name: null,
      },
    };
  },
  validations: {
    form: {
      name: { required, alphaNumWhiteDiacritic },
    },
  },
  watch: {
    value(val) {
      this.form.name = val;
    },
    'form.name'(val) {
      this.$emit('input', val);
    },
  },
  created() {
    this.form.name = this.value;
  },
};
</script>

<style></style>
