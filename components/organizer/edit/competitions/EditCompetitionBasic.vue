<template>
  <div id="edit-competition-basic">
    <b-dropdown aria-role="list" multiple>
      <b-button slot="trigger" type="is-info">Fields</b-button>

      <b-dropdown-item
        v-for="field in Object.keys(fields)"
        :key="field"
        aria-role="listitem"
        class="is-capitalized"
      >
        {{ field }}
      </b-dropdown-item>
    </b-dropdown>

    <form-group :label="$t('common.name')" :validator="$v.form.name" horizontal>
      <b-input v-model="form.name" />
    </form-group>

    <distance-input
      v-if="fields.distance"
      v-model="form.distance"
      :label="$t('event.distance')"
      :validator="$v.form.distance"
    />

    <age-input
      v-if="fields.ageLimit.minimum"
      v-model="form.ageLimit.minimum"
      :label="$t('organizer.competitions.min_age')"
      :placeholder="$t('organizer.competitions.age_before')"
      :validator="$v.form.ageLimit.minimum"
    />

    <age-input
      v-if="fields.ageLimit.maximum"
      v-model="form.ageLimit.maximum"
      :label="$t('organizer.competitions.max_age')"
      :placeholder="$t('organizer.competitions.age_after')"
      :validator="$v.form.ageLimit.maximum"
    />

    <age-input
      v-if="fields.limit"
      v-model="form.limit"
      :label="$t('organizer.competitions.participant_limit')"
      :validator="$v.form.limit"
    />

    <distance-input
      v-if="fields.elevation.positive"
      v-model="fields.elevation.positive"
      :label="$t('organizer.competitions.positive_elevation')"
      :validator="$v.form.elevation.positive"
    />

    <distance-input
      v-if="fields.elevation.negative"
      v-model="fields.elevation.negative"
      :label="$t('organizer.competitions.negative_elevation')"
      :validator="$v.form.elevation.negative"
    />

    <button-right />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'EditCompetitionBasic',
  props: {
    competition: { type: Object, default: null },
  },
  data() {
    return {
      fields: {
        distance: false,
        ageLimit: false,
        limit: false,
        elevation: false,
      },
      form: {
        name: null,
        distance: {
          amount: null,
          unit: 'kilometer',
        },
        ageLimit: {
          minimum: null,
          maximum: null,
        },
        limit: null,
        elevation: {
          positive: {
            amount: null,
            unit: 'meter',
          },
          negative: {
            amount: null,
            unit: 'meter',
          },
        },
      },
    };
  },
  validations: {
    form: {
      name: { required },
    },
  },
  created() {
    this.form = { ...this.competition };
    Object.keys(this.fields).forEach(field => {
      if (typeof field !== 'object')
        return (this.fields[field] = !!this.form[field]);

      Object.keys(field).forEach(
        nestedField =>
          (this.fields[field][nestedField] = !!this.form[field][nestedField])
      );
    });
  },
};
</script>

<style></style>
