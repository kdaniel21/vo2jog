<template>
  <crud-table
    id="contact-people-table"
    ref="table"
    :fields="fields"
    :data="contactPeople"
    :save-disabled="$v.newPersonForm.$anyError"
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
      <form-group
        v-else-if="isEdited"
        :validator="$v.newPersonForm[row.field.key]"
      >
        <b-input
          v-model="editedRow[row.field.key]"
          slot-scope="{ attrs, listeners }"
          v-bind="attrs"
          :autofocus="row.field.key === 'name'"
          v-on="listeners"
          @input="val => (newPersonForm[row.field.key] = val)"
        />
      </form-group>
      <span v-else-if="row.field.key === 'public'">
        <fa
          v-b-popover.hover.top="row.value ? 'Public' : 'Not public'"
          class="fa-fw"
          :icon="row.value ? 'check' : 'times'"
        />
      </span>
      <span v-else>{{ row.value }}</span>
    </template>
  </crud-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';
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
      // Added due to validation
      newPersonForm: {
        name: null,
        email: null,
        phone: null,
      },
    };
  },
  validations: {
    newPersonForm: {
      name: { required },
      email: { email },
      phone: {},
    },
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
      this.$v.newPersonForm.$touch();
      if (this.$v.newPersonForm.$anyError) return;

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
