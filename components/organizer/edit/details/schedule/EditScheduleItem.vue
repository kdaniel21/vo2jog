<template>
  <div id="edit-schedule-item">
    <b-menu :activable="false" class="mb-3">
      <b-menu-list>
        <b-menu-item v-for="item in items" :key="item.name" icon="clock">
          <template #label>
            <span class="ml-1 has-text-weight-medium">
              {{ $dateFns.format(item.time, 'kk:mm') }}:
            </span>
            <span>{{ item.name }}</span>

            <span class="actions is-pulled-right">
              <span @click="editedItem = item"><b-icon icon="edit" /></span>
              <span @click="onDeleteItem(item)">
                <b-icon icon="trash-alt" />
              </span>
            </span>
          </template>
        </b-menu-item>
      </b-menu-list>
    </b-menu>

    <new-schedule-item
      :day="day"
      :edited-item="editedItem"
      @cancel-edit="editedItem = null"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EditScheduleItem',
  props: {
    day: { type: Number, default: null },
    items: { type: Array, default: () => [] },
  },
  data() {
    return {
      editedItem: null,
    };
  },
  methods: {
    ...mapActions('organizer/events', ['showDeleteConfirm']),
    onDeleteItem(item) {
      this.showDeleteConfirm({ name: 'schedule', itemid: item.id });
    },
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1023px) {
  #edit-schedule-item {
    & .actions {
      display: none;
    }
    & li:hover .actions {
      display: initial;
    }
  }
}
</style>
