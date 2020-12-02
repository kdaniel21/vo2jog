<template>
  <div id="_id">
    <b-row>
      <b-col cols="12" md="3" order="3" order-md="1">
        <left-card />
      </b-col>
      <b-col cols="12" md="6" order="1" order-md="2">
        <race-description />
      </b-col>
      <b-col cols="12" md="3" order="2" order-md="3">
        <right-card />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  async fetch() {
    const { id } = this.$route.params;
    await this.fetchEvent(id);
  },
  methods: {
    ...mapActions('events', ['fetchEvent']),
  },
};
</script>

<style></style>
