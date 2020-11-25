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
    <distance-input v-model="form.distance" />

    <!-- ELEVATIION -->
    <b-checkbox
      v-model="hasElevation"
      switch
      @change="val => resetProperty(val, 'elevation')"
      >Add elevation data</b-checkbox
    >
    <elevation-input v-if="hasElevation" v-model="form.elevation" />

    <!-- PARTICIPIANTS LIMIT -->
    <b-form-checkbox
      v-model="hasParticipiantLimit"
      switch
      class="mb-1"
      @change="val => resetProperty(val, 'limit')"
    >
      Limit Number of Participiants
    </b-form-checkbox>
    <form-group
      v-if="hasParticipiantLimit"
      label="Maximum Participiants"
      label-for="max-participiants-input"
    >
      <b-form-input
        id="max-participiants-input"
        v-model.number="form.limit"
        type="number"
        min="0"
        step="10"
      ></b-form-input>
    </form-group>

    <!-- AGE LIMIT -->
    <b-form-checkbox
      v-model="hasAgeLimit"
      switch
      class="mb-1"
      @change="val => resetProperty(val, 'ageLimit')"
    >
      Limit Age
    </b-form-checkbox>
    <form-group>
      <age-limit-input v-if="hasAgeLimit" v-model="form.ageLimit" />
    </form-group>

    <!-- PRICING -->
    <fee v-model="form.fees" />

    <submit-button submit :disabled="$v.form.$anyError" />
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import toaster from '@/mixins/toaster';
import DistanceInput from '@/components/organizer/edit/competition/create/DistanceInput';
import ElevationInput from '@/components/organizer/edit/competition/create/ElevationInput';
import AgeLimitInput from '@/components/organizer/edit/competition/create/AgeLimitInput';
import Fee from '@/components/organizer/edit/competition/create/Fee';
import SubmitButton from '@/components/organizer/edit/SubmitButton';

export default {
  name: 'CreateCompetition',
  components: {
    DistanceInput,
    AgeLimitInput,
    ElevationInput,
    Fee,
    SubmitButton,
  },
  mixins: [toaster],
  props: {
    competition: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      hasParticipiantLimit: false,
      hasAgeLimit: false,
      hasElevation: false,
      form: {
        name: null,
        distance: { amount: null, unit: 'kilometer' },
        ageLimit: { minimum: null, maximum: null },
        limit: null,
        fees: [],
        elevation: {
          positive: { amount: null, unit: 'meter' },
          negative: { amount: null, unit: 'meter' },
        },
      },
    };
  },
  validations: {
    // No need to validate other fields since they are validated as number input anyways
    form: {
      name: { required },
    },
  },
  created() {
    if (!this.competition) return;

    this.form = { ...this.form, ...this.competition };
    const { ageLimit, limit } = this.competition;
    this.hasParticipiantLimit = !!limit;
    this.hasAgeLimit = !!ageLimit.minimum || !!ageLimit.maximum;
  },
  methods: {
    ...mapActions('organizer/events', ['addItem', 'updateItem']),
    resetProperty(value, propName) {
      if (value) return;

      this.form[propName] = null;
    },
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
