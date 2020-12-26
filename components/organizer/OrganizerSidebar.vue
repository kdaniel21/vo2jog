<template>
  <div>
    <b-sidebar
      id="organizer-sidebar"
      :open="isSidebarVisible"
      position="fixed"
      type="is-light"
      fullheight
      :fullwidth="isTouch"
      :reduce="!isTouch"
      :expand-on-hover="!isTouch"
    >
      <!-- CLOSE BUTTON -->
      <div
        class="is-hidden-desktop is-size-4 pt-4 px-4 is-flex is-justify-content-space-between"
      >
        <span class="title">{{ $t('navbar.brand') }}</span>
        <span @click="$emit('toggle-sidebar')">
          <b-icon icon="times" class="is-clickable" />
        </span>
      </div>

      <!-- SELECT EVENT -->
      <event-select class="px-2 py-2" />

      <!-- MENU -->
      <b-menu class="px-3 py-5">
        <b-menu-list>
          <template #label>
            <div v-if="selectedEvent">
              <b-icon icon="calendar" />
              <span id="event-name">
                {{ selectedEvent.name }}
              </span>
            </div>
          </template>

          <b-menu-item
            v-for="{ icon, text, disabled, children, to } in eventMenu"
            :key="text"
            :icon="icon"
            :label="$t(`organizer.sidebar.${text}`)"
            :disabled="disabled || !selectedEvent"
            :tag="to ? 'nuxt-link' : 'a'"
            :to="to"
          >
            <b-menu-item
              v-for="{ text, icon, to } in children"
              :key="text"
              :icon="icon"
              :label="$t(`organizer.sidebar.${text}`)"
              :tag="to ? 'nuxt-link' : 'a'"
              :to="to"
            />
          </b-menu-item>
        </b-menu-list>

        <!-- MOBILE ONLY NAVBAR ITEMS -->
        <div class="is-hidden-tablet mt-3">
          <b-menu-list :label="$t('organizer.sidebar.profile')">
            <b-menu-item
              icon="user-circle"
              :label="$t('organizer.navbar.public_profile')"
            />
            <b-menu-item
              icon="user-cog"
              :label="$t('organizer.navbar.account')"
            />
            <b-menu-item
              icon="sign-out-alt"
              :label="$t('organizer.navbar.sign_out')"
              @click="$auth.logout"
            />
          </b-menu-list>
        </div>
      </b-menu>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import windowSize from '~/mixins/window-size';

export default {
  name: 'OrganizerSidebar',
  mixins: [windowSize],
  props: { isSidebarVisible: { type: Boolean, default: true } },
  data() {
    return {
      visible: false,
      eventMenu: [
        {
          icon: 'pen-square',
          text: 'event_page',
          children: [
            {
              icon: 'info-circle',
              text: 'information',
              to: '/organizers/edit/information',
            },
            {
              icon: 'asterisk',
              text: 'details',
              to: '/organizers/edit/details',
            },
            {
              icon: 'running',
              text: 'competitions',
              to: '/organizers/edit/competitions',
            },
          ],
        },
        { icon: 'chart-line', text: 'analytics', disabled: true },
        { icon: 'users', text: 'participants', disabled: true },
      ],
    };
  },
  computed: {
    ...mapState('organizer/events', ['selectedEvent']),
    isTouch() {
      return this.width < 1024;
    },
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 1024px) {
  #organizer-sidebar > .sidebar-content {
    display: flex !important;
    &.is-mini {
      &:not(.is-mini-expand),
      &.is-mini-expand:not(:hover) {
        #event-select {
          display: none;
        }
        .menu-label > div > span:nth-child(2) {
          display: none;
        }
        .menu-list {
          li > a > span:nth-child(2) {
            display: none;
          }
          ul {
            padding-left: 0;
            li > a {
              display: inline-block;
            }
          }
        }
      }
      .menu-label:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
