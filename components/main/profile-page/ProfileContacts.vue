<template>
  <!-- <div id="card-contacts">
    <b-card-title>Contacts</b-card-title>

    <b-table-lite striped hover responsive="md" :fields="fields" :items="data">
      <!-- ACTIONS COLUMN
      <template #cell(actions)="{ item }">
        <a v-if="item.email" :href="`mailto:${item.email}`" class="text-dark">
          <fa
            v-b-popover.hover.top="`Mail ${item.name}`"
            icon="envelope"
            fixed-width
          />
        </a>
        <a
          v-if="item.phone"
          :href="`tel:${item.phone}`"
          class="d-md-none text-white"
        >
          <fa
            v-b-popover.hover.top="`Call ${item.name}`"
            icon="phone"
            fixed-width
          />
        </a>
      </template>
    </b-table-lite>
  </div> -->
</template>

<script>
export default {
  name: 'ProfileContacts',
  props: {
    data: { type: Array, default: null },
  },
  data() {
    return {
      fields: ['name', 'email', 'phone', { key: 'actions', label: '' }],
    };
  },
};
</script>
