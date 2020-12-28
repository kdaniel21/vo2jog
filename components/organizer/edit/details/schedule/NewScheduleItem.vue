<template>
  <div id="new-schedule-item">
    <new-item
      v-model="form.name"
      :is-edit="!!editedItem"
      :validator="$v.form.name"
      :placeholder="$t('organizer.details.add_schedule_item')"
      @save="saveScheduleItem"
      @cancel="cancelEdit"
    >
      <b-clockpicker
        v-model="form.time"
        size="is-small"
        icon="clock"
        rounded
        :placeholder="$t('organizer.details.select_time')"
      />
    </new-item>
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
      if (this.editedItem) this.updateItem(payload);
      else this.addItem(payload);
      this.cancelEdit();
    },
    cancelEdit() {
      this.$emit('cancel-edit');
      this.$v.form.$reset();
      this.form = {};
    },
  },
};
</script>

<style lang="scss">
#new-schedule-item {
  .b-clockpicker {
    width: 7rem;
  }
}
</style>
