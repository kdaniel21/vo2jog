<template>
  <div id="show-profile">
    <layout
      title="Profile"
      :data="user"
      :props="['name', 'motto']"
      @edit="$emit('edit')"
    />

    <b-row class="mb-2">
      <b-col cols="12" md="4" class="font-weight-bold">Description</b-col>
      <b-col>
        <slot name="description">
          {{ user.description }}
        </slot>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Layout from '@/components/organizer/profile/Layout';

export default {
  name: 'ShowProfile',
  components: { Layout },
  computed: {
    ...mapState('auth', ['user']),
  },
};
</script>
