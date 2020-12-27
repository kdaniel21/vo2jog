<template>
  <div id="new-schedule-item">
    <div class="textarea px-3 pt-1 pb-2 mb-3">
      <form-group :validator="$v.form.name">
        <b-input
          id="new-input"
          v-model="form.name"
          placeholder="Schedule Item Name"
          @input="$v.form.name.$touch()"
        />
      </form-group>

      <b-clockpicker
        v-model="form.time"
        size="is-small"
        icon="clock"
        rounded
        :placeholder="$t('organizer.details.select_time')"
      />
    </div>

    <div class="is-flex is-justify-content-end">
      <b-button
        v-if="editedItem"
        type="is-light"
        class="mr-2"
        @click="cancelEdit"
      >
        {{ $t('common.cancel') }}
      </b-button>

      <b-button
        type="is-primary"
        :disabled="$v.form.$anyError"
        @click="saveScheduleItem"
      >
        {{ editedItem ? $t('common.save') : $t('common.add_item') }}
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import { alphaNumWhiteDiacritic } from '@/plugins/vuelidate/custom-validators';

export default {
  name: 'NewScheduleItem',
  props: {
    day: { type: Number, default: null },
    editedItem: { type: Object, default: null },
  },
  data() {
    return {
      form: {
        name: null,
        time: this.$dateFns.addDays(
          this.$store.state.organizer.events.selectedEvent.startDate,
          this.day
        ),
      },
    };
  },
  validations: {
    form: {
      name: { required, alphaNumWhiteDiacritic },
    },
  },
  watch: {
    editedItem(val) {
      this.form = { ...val };
    },
  },
  methods: {
    ...mapActions('organizer/events', ['addItem', 'updateItem']),
    saveScheduleItem() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) return;

      const payload = { name: 'schedule', data: this.form };
      if (!this.editedItem) return this.addItem(payload);
      this.updateItem(payload);
      this.cancelEdit();
    },
    cancelEdit() {
      this.$emit('cancel-edit');
      this.$v.form.$reset();
    },
  },
};
</script>

<style lang="scss">
#new-schedule-item {
  .textarea {
    min-height: 0;
    height: auto;
  }

  #new-input {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    padding: 0;

    &:focus {
      box-shadow: none;
    }
  }

  .b-clockpicker {
    width: 7rem;
  }
}
</style>
