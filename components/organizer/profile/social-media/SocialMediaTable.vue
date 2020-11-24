<template>
  <crud-table
    id="social-media-table"
    ref="table"
    :fields="fields"
    :data="socialMedia"
    :save-disabled="$v.form.$anyError"
    @create="createSocialMedia"
    @update="updateSocialMedia"
    @delete="deleteSocialMedia"
  >
    <template #default="{ isEdited, editedRow, row }">
      <!-- EDIT STATE -->
      <icon-select
        v-if="isEdited && row.field.key === 'icon'"
        v-model="editedRow[row.field.key]"
        class="icon-select"
      />
      <form-group v-else-if="isEdited" :validator="$v.form[row.field.key]">
        <b-input
          v-model="editedRow[row.field.key]"
          slot-scope="{ attrs, listeners }"
          v-bind="attrs"
          v-on="listeners"
          @input="val => (form[row.field.key] = val)"
        />
      </form-group>

      <!-- VIEW STATE -->
      <span v-else-if="row.field.key === 'icon'">
        <fa :icon="row.value.length > 1 ? row.value : row.value[0]" />
      </span>
      <span v-else>{{ row.value }}</span>
    </template>
  </crud-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, url } from 'vuelidate/lib/validators';
import toaster from '@/mixins/toaster';
import CrudTable from '@/components/organizer/profile/CrudTable';
import IconSelect from '@/components/organizer/edit/IconSelect';

export default {
  name: 'SocialMediaTable',
  components: { CrudTable, IconSelect },
  mixins: [toaster],
  data() {
    return {
      fields: ['icon', 'name', 'link', { key: 'actions', label: '' }],
      form: {
        name: null,
        link: null,
      },
    };
  },
  validations: {
    form: {
      name: { required },
      link: { required, url },
    },
  },
  computed: {
    ...mapState({
      socialMedia: state => state.auth.user.socialMedia,
    }),
  },
  methods: {
    ...mapActions('organizer/profile', [
      'addProfileItem',
      'updateProfileItem',
      'deleteProfileItem',
    ]),
    newSocialMedia() {
      this.$refs.table.addRow();
    },
    async createSocialMedia(newSocialMedia) {
      try {
        this.$v.form.$touch();
        if (this.$v.form.$anyError) throw new Error('Validation error!');

        newSocialMedia.icon = newSocialMedia.icon.icon;
        await this.addProfileItem({
          name: 'socialMedia',
          data: newSocialMedia,
        });
        this.successToast('Social media platform added successfully!');
      } catch {
        this.errorToast('Could not add platform! Please try again.');
      } finally {
        this.$v.form.$reset();
      }
    },
    async updateSocialMedia(updatedItem) {
      try {
        this.$v.form.$touch();
        if (this.$v.form.$anyError) throw new Error('Validation error!');

        await this.updateProfileItem({
          name: 'socialMedia',
          data: updatedItem,
        });
        this.successToast('Social media platform updated successfully!');
      } catch {
        this.errorToast('Could not update! Please try again.');
      } finally {
        this.$v.form.$reset();
      }
    },
    async deleteSocialMedia(itemId) {
      try {
        await this.deleteProfileItem({ name: 'socialMedia', itemId });
        this.successToast('Social media platform removed!');
      } catch {
        this.errorToast('Could not remove please! Please try again.');
      }
    },
  },
};
</script>

<style scoped>
.icon-select {
  min-width: 7rem;
}
</style>
