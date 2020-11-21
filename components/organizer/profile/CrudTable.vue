<template>
  <b-table-lite :items="tableData" :fields="fields" striped hover>
    <template #cell()="{ value, field: { key }, item: { _id } }">
      <!-- EDITED STATE -->
      <slot
        :isEdited="isRowEdited(_id)"
        :editedRow="editedRow"
        :row="{ value, field: { key }, item: { _id } }"
      >
        <b-input
          v-if="isRowEdited(_id)"
          v-model="editedRow[key]"
          :autofocus="key === fields[0]"
        ></b-input>
        <span v-else>{{ value }}</span>
      </slot>
    </template>

    <template #cell(actions)="{ item }">
      <div v-if="isRowEdited(item._id)">
        <fa
          v-b-popover.hover.top="'Save'"
          icon="check"
          class="cursor-pointer fa-fw"
          @click="newRow ? createRow() : updateRow()"
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
        <delete-button @delete="deleteRow(item._id)" />
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
      return this.editedRow && this.editedRow._id === id;
    },
    addRow() {
      this.newRow = { _id: `${Date.now()}` };
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
