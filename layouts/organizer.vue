<template>
  <vsb-layout :items="navItems" mobile-fullscreen>
    <template #toggle-icon
      ><fa
        v-b-toggle="'sidebar'"
        icon="bars"
        class="h3 d-md-none mt-1 align-self-end"
    /></template>

    <template #title>
      <div class="d-flex justify-content-between w-100">
        <event-picker />
        <create-event>
          <fa
            v-b-modal.create-modal
            icon="plus-circle"
            style="vertical-align: -0.5rem"
          />
        </create-event>
      </div>
    </template>

    <template #navbar-content>
      <organizer-navbar />
    </template>

    <template #dropdown-icon="{ item, index }">
      <fa
        v-if="item.children"
        v-b-toggle="`nav-item-${index}`"
        icon="caret-down"
      />
    </template>

    <template>
      <b-container class="py-3 py-md-5">
        <Nuxt />
      </b-container>
    </template>
  </vsb-layout>
</template>

<script>
export default {
  middleware: ['auth', 'fetch-events'],
  data() {
    return {
      navItems: [
        {
          text: 'Dashboard',
          link: '/organizers/dashboard',
          icon: { tag: 'fa', attributes: { icon: 'tachometer-alt' } },
        },
        {
          name: 'Event',
          children: [
            {
              link: '/',
              text: 'Analytics',
              disabled: true,
              icon: { tag: 'fa', attributes: { icon: 'chart-line' } },
            },
            {
              link: '/',
              text: 'Signups',
              disabled: true,
              icon: { tag: 'fa', attributes: { icon: 'user' } },
            },
            {
              text: 'Edit',
              icon: { tag: 'fa', attributes: { icon: 'edit' } },
              children: [
                { text: 'Basic Information', link: '/organizers/edit/basic' },
                { text: 'Categories', link: '/organizers/edit/categories' },
                { text: 'Description', link: '/organizers/edit/description' },
                { text: 'Competitions', link: '/organizers/edit/competitions' },
                { text: 'Location', link: '/organizers/edit/location' },
                { text: 'Schedule', link: '/organizers/edit/schedule' },
                { text: 'Social Media', link: '/organizers/edit/social-media' },
                { text: 'Q&A', link: '/organizers/edit/questions' },
                { text: 'Documents', link: '/organizers/edit/documents' },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
