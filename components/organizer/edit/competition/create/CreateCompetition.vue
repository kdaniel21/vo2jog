<template>
  <b-form id="create-competition" @submit.prevent="saveCompetition">
    <!-- NAME -->
    <b-form-group label="Competition Name" label-for="name-input">
      <b-form-input
        id="name-input"
        v-model="form.name"
        placeholder="10K Elite Race sponsored by Racircuit"
      ></b-form-input>
    </b-form-group>

    <!-- DISTANCE -->
    <distance-input v-model="form.distance" />

    <!-- PARTICIPIANTS LIMIT -->
    <b-form-checkbox v-model="limitParticipiants" switch class="mb-1">
      Limit Number of Participiants
    </b-form-checkbox>
    <b-form-group
      v-if="limitParticipiants"
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
    </b-form-group>

    <!-- AGE LIMIT -->
    <b-form-checkbox v-model="limitAge" switch class="mb-1">
      Limit Age
    </b-form-checkbox>
    <age-limit-input v-if="limitAge" v-model="form.ageLimit" />

    <!-- PRICING -->
    <fee v-model="form.fees" />

    <b-button
      variant="primary"
      class="btn-block-xs-only mt-3 float-right"
      type="submit"
      >Save</b-button
    >
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import DistanceInput from '@/components/organizer/edit/competition/create/DistanceInput';
import AgeLimitInput from '@/components/organizer/edit/competition/create/AgeLimitInput';
import Fee from '@/components/organizer/edit/competition/create/Fee';

export default {
  name: 'CreateCompetition',
  components: { DistanceInput, AgeLimitInput, Fee },
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
