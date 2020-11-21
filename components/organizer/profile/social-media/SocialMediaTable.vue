<template>
  <crud-table
    id="social-media-table"
    ref="table"
    :fields="fields"
    :data="socialMedia"
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
      <b-input v-else-if="isEdited" v-model="editedRow[row.field.key]" />

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
    };
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
        newSocialMedia.icon = newSocialMedia.icon.icon;
        await this.addProfileItem({
          name: 'socialMedia',
          data: newSocialMedia,
        });
        this.successToast('Social media platform added successfully!');
      } catch {
        this.errorToast('Could not add platform! Please try again.');
      }
    },
    async updateSocialMedia(updatedItem) {
      try {
        await this.updateProfileItem({
          name: 'socialMedia',
          data: updatedItem,
        });
        this.successToast('Social media platform updated successfully!');
      } catch {
        this.errorToast('Could not update! Please try again.');
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
