<template>
  <b-card no-body>
    <b-tabs card>
      <b-tab v-for="tab in tabs" :key="tab.name" :title="tab.name">
        <component :is="tab.component" :data="tab.data" />
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
// Imported in order to use with <component :is />
// @nuxt/components does not support them (only with /global folder)
import CardEvents from './CardEvents';
import CardContacts from './CardContacts';

export default {
  name: 'ProfileCard',
  components: { CardEvents, CardContacts },
  props: { profile: { type: Object, default: () => ({}) } },
  data() {
    return {
      tabs: [
        {
          name: 'Contacts',
          component: 'card-contacts',
          data: this.profile.contactPeople,
        },
        { name: 'Events', component: 'card-events', data: this.profile.events },
      ],
    };
  },
};
</script>

<style></style>
