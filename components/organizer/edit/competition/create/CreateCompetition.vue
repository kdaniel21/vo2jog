<template>
  <b-form id="create-competition" @submit.prevent="saveCompetition">
    <!-- NAME -->
    <form-group
      label="Competition Name"
      label-for="name-input"
      :validator="$v.form.name"
    >
      <b-form-input
        id="name-input"
        v-model="form.name"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        placeholder="10K Elite Race sponsored by Racircuit"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <!-- DISTANCE -->
    <distance-input v-model="form.distance" :validator="$v.form.distance" />

    <!-- PARTICIPIANTS LIMIT -->
    <b-form-checkbox v-model="limitParticipiants" switch class="mb-1">
      Limit Number of Participiants
    </b-form-checkbox>
    <form-group
      v-if="limitParticipiants"
      label="Maximum Participiants"
      label-for="max-participiants-input"
      :validator="$v.form.limit"
    >
      <b-form-input
        id="max-participiants-input"
        v-model.number="form.limit"
        slot-scope="{ attrs, listeners }"
        type="number"
        min="0"
        step="10"
        v-bind="attrs"
        v-on="listeners"
      ></b-form-input>
    </form-group>

    <!-- AGE LIMIT -->
    <b-form-checkbox v-model="limitAge" switch class="mb-1">
      Limit Age
    </b-form-checkbox>
    <form-group :validator="$v.form.ageLimit">
      <age-limit-input
        v-if="limitAge"
        v-model="form.ageLimit"
        slot-scope="{ attrs, listeners }"
        v-bind="attrs"
        v-on="listeners"
      />
    </form-group>

    <!-- PRICING -->
    <fee v-model="form.fees" />

    <submit-button submit :disabled="$v.form.$anyError" />
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import {
  required,
  numeric,
  minValue,
  maxValue,
} from 'vuelidate/lib/validators';
import toaster from '@/mixins/toaster';
import DistanceInput from '@/components/organizer/edit/competition/create/DistanceInput';
import AgeLimitInput from '@/components/organizer/edit/competition/create/AgeLimitInput';
import Fee from '@/components/organizer/edit/competition/create/Fee';
import SubmitButton from '@/components/organizer/edit/SubmitButton';

export default {
  name: 'CreateCompetition',
  components: { DistanceInput, AgeLimitInput, Fee, SubmitButton },
  mixins: [toaster],
  props: {
    competition: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      limitParticipiants: false,
      limitAge: false,
      form: {
        name: null,
        distance: { length: null, unit: 'kilometer' },
        ageLimit: { minimum: null, maximum: null },
        limit: null,
        fees: [],
      },
    };
  },
  validations: {
    // No need to validate other fields since they are validated as number input anyways
    form: {
      name: { required },
    },
  },
  watch: {
    limitAge(val) {
      if (!val) this.form.ageLimit = { minimum: null, maximum: null };
    },
    limitParticipiants(val) {
      if (!val) this.form.limit = null;
    },
  },
  created() {
    if (!this.competition) return;

    this.form = { ...this.competition };
    const { ageLimit, limit } = this.competition;
    this.limitParticipiants = !!limit;
    this.limitAge = !!ageLimit.minimum || !!ageLimit.maximum;
  },
  methods: {
    ...mapActions('organizer/events', ['addItem', 'updateItem']),
    async saveCompetition() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      try {
        const actionParams = { name: 'competitions', data: this.form };
        const { _id } = this.form;

        if (_id) {
          await this.updateItem({ ...actionParams, itemId: _id });
        } else {
          await this.addItem(actionParams);
        }

        this.successToast('Competition saved successfully!');
      } catch (err) {
        console.log(err);
        this.errorToast('Could not add competition! Please try again.');
      }
    },
  },
};
</script>
