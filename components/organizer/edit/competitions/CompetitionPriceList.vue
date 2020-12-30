<template>
  <div
    id="competition-price-list"
    class="is-flex is-flex-direction-column is-justify-content-space-between"
  >
    <pre>{{ $store.state.organizer.events. }}</pre>

    <edit-list
      :items="fees"
      icon="money-check"
      @edit="item => (editedItem = item)"
      @delete="onDelete"
    >
      <span slot-scope="{ item }">
        {{ item.price }}
        <span class="is-uppercase">{{ item.currency }}</span>
        <span class="is-italic">
          ({{ $t('organizer.competitions.ends_at') }}:
          {{ $dateFns.format(item.endTime, 'dd.MM.yyyy kk:mm') }})
        </span>
      </span>
    </edit-list>

    <new-item
      v-model.number="form.price"
      type="number"
      step="0.05"
      :is-edit="!!editedItem"
      @save="onSave"
    >
      <currency-select v-model="form.currency" class="mr-1" />
      <b-datetimepicker
        v-model="form.endTime"
        icon="calendar"
        :placeholder="$t('organizer.competitions.ends_at')"
      />
    </new-item>
  </div>
</template>

<script>
export default {
  name: 'CompetitionPriceList',
  props: {
    value: { type: Array, default: () => [] },
  },
  data() {
    return {
      editedItem: null,
      form: {
        price: null,
        currency: 'huf',
        endTime: null,
      },
    };
  },
  computed: {
    fees: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  watch: {
    editedItem(val) {
      this.form = { ...val };
    },
  },
  methods: {
    onSave() {
      this.form.endTime = new Date(this.form.endTime);
      if (!this.editedItem) this.fees.push({ ...this.form });
      else {
        const editedIndex = this.fees.findIndex(
          ({ id }) => id === this.editedItem.id
        );
        this.fees.splice(editedIndex, 1, { ...this.form });
      }

      this.form = {};
      this.editedItem = null;
    },
    onDelete(item) {
      const index = this.fees.findIndex(priceStep => priceStep.id === item.id);
      this.fees.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
#competition-price-list {
  height: 100%;
}
</style>
