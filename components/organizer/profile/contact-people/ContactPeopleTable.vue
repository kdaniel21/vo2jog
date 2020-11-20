<template>
  <crud-table
    id="contact-people-table"
    ref="table"
    :fields="fields"
    :data="contactPeople"
    @create="createContactPerson"
    @update="updateContactPerson"
    @delete="deleteContactPerson"
  >
    <template #default="{ isEdited, editedRow, row }">
      <b-checkbox
        v-if="isEdited && row.field.key === 'public'"
        v-model="editedRow.public"
        switch
      />
      <b-input
        v-else-if="isEdited"
        v-model="editedRow[row.field.key]"
        :autofocus="row.field.key === 'name'"
      />
      <span v-else-if="row.field.key === 'public'">
        <fa :icon="row.value ? 'check' : 'times'" />
      </span>
      <span v-else>{{ row.value }}</span>
    </template>
  </crud-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import toaster from '@/mixins/toaster';
import CrudTable from '@/components/organizer/profile/CrudTable';

export default {
  name: 'ContactPeopleTable',
  components: { CrudTable },
  mixins: [toaster],
  data() {
    return {
      fields: [
        'name',
        'email',
        'phone',
        'public',
        { key: 'actions', label: '' },
      ],
    };
  },
  computed: {
    ...mapState({
      contactPeople: state => state.auth.user.contactPeople,
    }),
  },
  methods: {
    ...mapActions('organizer/profile', [
      'addProfileItem',
      'updateProfileItem',
      'deleteProfileItem',
    ]),
    addPerson() {
      this.$refs.table.addRow();
    },
    createContactPerson(person) {
      this.addProfileItem({ name: 'contactPeople', data: person })
        .then(() => this.successToast('Person added successfully!'))
        .catch(() =>
          this.errorToast('Could not add person. Please try again!')
        );
    },
    updateContactPerson(updatedPerson) {
      this.updateProfileItem({ name: 'contactPeople', data: updatedPerson })
        .then(() => this.successToast('Person updated successfully!'))
        .catch(() =>
          this.errorToast('Could not update person. Please try again!')
        );
    },
    deleteContactPerson(id) {
      this.deleteProfileItem({ name: 'contactPeople', itemId: id })
        .then(() => this.successToast('Person added successfully!'))
        .catch(() =>
          this.errorToast('Could not add person. Please try again!')
        );
    },
  },
};
</script>
