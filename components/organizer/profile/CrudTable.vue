<template>
  <b-table-lite :items="tableData" :fields="fields" striped hover>
    <template #cell()="{ value, field: { key }, item: { id } }">
      <!-- EDITED STATE -->
      <slot
        :isEdited="isRowEdited(id)"
        :editedRow="editedRow"
        :row="{ value, field: { key }, item: { id } }"
      >
        <b-input
          v-if="isRowEdited(id)"
          v-model="editedRow[key]"
          :autofocus="key === fields[0]"
        ></b-input>
        <span v-else>{{ value }}</span>
      </slot>
    </template>

    <template #cell(actions)="{ item }">
      <div v-if="isRowEdited(item.id)">
        <fa
          v-b-popover.hover.top="'Save'"
          icon="check"
          :class="[
            'cursor-pointer',
            'fa-fw',
            saveDisabled ? 'fa-disabled' : '',
          ]"
          @click="!saveDisabled ? (newRow ? createRow() : updateRow()) : null"
        />
        <fa
          v-b-popover.hover.top="'Cancel'"
          icon="times"
          class="cursor-pointer fa-fw"
          @click="cancelEdit"
        />
      </div>
      <div v-else>
        <fa
          v-b-popover.hover.top="'Edit'"
          icon="edit"
          class="cursor-pointer fa-fw"
          @click="editRow(item)"
        />
        <delete-button @delete="deleteRow(item.id)" />
      </div>
    </template>
  </b-table-lite>
</template>

<script>
import DeleteButton from '@/components/organizer/edit/DeleteButton';

export default {
  name: 'CrudTable',
  components: { DeleteButton },
  props: {
    fields: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    saveDisabled: { type: Boolean, default: false },
  },
  data() {
    return {
      editedRow: null,
      newRow: null,
    };
  },
  computed: {
    // The initial row data merged with the new row
    // Null value is omitted
    tableData() {
      return this.newRow ? [...this.data, this.newRow] : this.data;
    },
  },
  methods: {
    isRowEdited(id) {
      return this.editedRow && this.editedRow.id === id;
    },
    addRow() {
      this.newRow = { id: `${Date.now()}` };
      this.editRow(this.newRow);
    },
    editRow(row) {
      this.editedRow = { ...row };
    },
    cancelEdit() {
      this.newRow = null;
      this.editedRow = null;
    },
    createRow() {
      this.$emit('create', this.editedRow);

      this.newRow = null;
      this.cancelEdit();
    },
    updateRow() {
      this.$emit('update', this.editedRow);
      this.cancelEdit();
    },
    deleteRow(rowId) {
      this.$emit('delete', rowId);
    },
  },
};
</script>
