<template>
  <div id="edit-competition-basic">
    <h2 class="title is-4">{{ $t('organizer.competitions.details') }}</h2>

    <distance-input
      v-model="form.distance"
      :label="$t('event.distance')"
      :validator="$v.form.distance"
    />

    <form-group
      :validator="$v.form.limit"
      :label="$t('organizer.competitions.limit')"
      horizontal
    >
      <b-numberinput
        v-model="form.limit"
        :min="0"
        :placeholder="$t('organizer.competitions.participant_limit')"
      />
    </form-group>

    <age-input
      v-model="form.ageLimit.minimum"
      :label="$t('organizer.competitions.min_age')"
      :validator="$v.form.ageLimit.minimum"
      :placeholder="$t('organizer.competitions.age_before')"
    />

    <age-input
      v-model="form.ageLimit.maximum"
      :label="$t('organizer.competitions.max_age')"
      :validator="$v.form.ageLimit.maximum"
      :placeholder="$t('organizer.competitions.age_after')"
    />

    <distance-input
      v-model="form.elevation.positive"
      :label="$t('organizer.competitions.positive_elevation')"
      :validator="$v.form.elevation.positive"
    />

    <b-field horizontal>
      <b-switch v-model="isElevationDifferent">
        {{ $t('organizer.competitions.elevation_different') }}
      </b-switch>
    </b-field>

    <distance-input
      v-if="isElevationDifferent"
      v-model="form.elevation.negative"
      :label="$t('organizer.competitions.negative_elevation')"
      :validator="$v.form.elevation.negative"
    />
  </div>
</template>

<script>
import { decimal, numeric, minValue, maxValue } from 'vuelidate/lib/validators';

export default {
  name: 'EditCompetitionBasic',
  props: {
    value: { type: Object, default: null },
  },
  data() {
    return {
      isElevationDifferent:
        this.value.elevation && this.value.elevation.negative.amount,
      form: {
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
      distance: { amount: { decimal } },
      ageLimit: {
        minimum: {
          numeric,
          minValue: minValue(1900),
        },
        maximum: {
          numeric,
          maxValue: maxValue(new Date().getFullYear()),
        },
      },
      elevation: {
        positive: { amount: { numeric, minValue: minValue(0) } },
        negative: { amount: { numeric, minValue: minValue(0) } },
      },
    },
  },
  watch: {
    form(val) {
      this.$emit('input', { ...this.value, ...this.form });
    },
  },
  created() {
    this.form = { ...this.value };
  },
};
</script>

<style></style>
