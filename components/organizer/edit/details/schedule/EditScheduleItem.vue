<template>
  <div id="edit-schedule-item">
    <edit-list
      :items="items"
      icon="clock"
      @edit="item => (editedItem = item)"
      @delete="onDeleteItem"
    >
      <template #default="{ item }">
        <span class="ml-1 has-text-weight-medium">
          {{ $dateFns.format(item.time, 'kk:mm') }}:
        </span>
        <span>{{ item.name }}</span>
      </template>
    </edit-list>

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
      this.showDeleteConfirm({ name: 'schedule', itemId: item.id });
    },
  },
};
</script>
