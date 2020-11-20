<template>
  <div id="credentials">
    <edit-credentials
      v-if="editCredentials"
      @cancel="editCredentials = false"
    />
    <show-credentials v-else @edit="editCredentials = true" />
  </div>
</template>

<script>
import ShowCredentials from '@/components/organizer/profile/credentials/ShowCredentials';
import EditCredentials from '@/components/organizer/profile/credentials/EditCredentials';

export default {
  name: 'Credentials',
  components: { ShowCredentials, EditCredentials },
  data() {
    return {
      editCredentials: false,
    };
  },
};
</script>

<style></style>
