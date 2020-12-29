/* eslint-disable no-undef */
import camelToKebab from '@/assets/utils/camelToKebab';

export const state = () => ({
  selectedEvent: null,
  events: [],
});

export const getters = {};

export const mutations = {
  setEvents(state, events) {
    state.events = [...events];
  },
  setSelectedEvent(state, event) {
    state.selectedEvent = { ...event };
  },
  addEvent(state, event) {
    state.events.push({ ...event });
  },
  updateEvent(state, updatedEvent) {
    const { id } = updatedEvent;
    const index = state.events.findIndex(event => event.id === id);

    if (state.selectedEvent.id === updatedEvent.id)
      Object.assign(state.selectedEvent, { ...updatedEvent });

    if (index === -1) return;

    const { name, startDate, location, categories, imageCover } = updatedEvent;
    Object.assign(state.events[index], {
      name,
      startDate,
      location,
      categories,
      imageCover,
    });
  },
};

export const actions = {
  async fetchEvents({ commit }) {
    const fields = [
      'name',
      'startDate',
      'location',
      'categories',
      'imageCover',
    ].join(',');
    const res = await this.$axios.get(`/api/profile/events?fields=${fields}`);

    const events = res.data.data;
    if (events.length > 0) commit('setEvents', events);
  },
  async selectEvent({ commit }, selectedEventId) {
    try {
      const res = await this.$axios.get(`/api/events/${selectedEventId}`);
      if (!res.data.data) return;

      if (process.client)
        $nuxt.$cookies.set('selectedEventId', res.data.data.id);
      commit('setSelectedEvent', res.data.data);
    } catch {
      // If event got deleted in the meantime it just doesn't get selected
    }
  },
  async createEvent({ commit, dispatch }, newEventName) {
    const res = await this.$axios.post('/api/events', { name: newEventName });
    const { id, name } = res.data.data;

    commit('addEvent', { id, name });
    dispatch('selectEvent', id);
  },
  async updateEvent({ commit, state }, updatedItems) {
    try {
      const { id } = state.selectedEvent;
      const res = await this.$axios.patch(`/api/events/${id}`, updatedItems);

      this.$toast.success($nuxt.$t('toast.success.event_update'));
      commit('updateEvent', res.data.data);
    } catch {
      this.$toast.success($nuxt.$t('toast.error.event_update'));
    }
  },
  async addItem({ commit, state }, { name, data, url }) {
    try {
      const { id } = state.selectedEvent;
      const endpointName = camelToKebab(name);
      const endpointUrl = url || `/api/events/${id}/${endpointName}`;

      const res = await this.$axios.post(endpointUrl, data);

      this.$toast.success($nuxt.$t('toast.success.item_added'));
      commit('updateEvent', { ...state.selectedEvent, [name]: res.data.data });
    } catch {
      this.$toast.error($nuxt.$t('toast.error.item_added'));
    }
  },
  async updateItem({ commit, state }, { name, itemId, data, url }) {
    try {
      const { id } = state.selectedEvent;
      const endpointName = camelToKebab(name);
      const endpointUrl =
        url || `/api/events/${id}/${endpointName}/${itemId || data.id}`;

      const res = await this.$axios.patch(endpointUrl, data);

      this.$toast.success($nuxt.$t('toast.success.item_updated'));
      commit('updateEvent', { ...state.selectedEvent, [name]: res.data.data });
    } catch {
      this.$toast.error($nuxt.$t('toast.error.item_updated'));
    }
  },
  showDeleteConfirm({ dispatch }, payload) {
    $nuxt.$buefy.dialog.confirm({
      type: 'is-danger',
      message: $nuxt.$t('organizer.details.confirm_delete_item'),
      cancelText: $nuxt.$t('common.cancel'),
      confirmText: $nuxt.$t('common.confirm'),
      onConfirm: () => dispatch('deleteItem', payload),
    });
  },
  async deleteItem({ commit, state }, { name, itemId, url }) {
    try {
      const { id } = state.selectedEvent;
      const endpointName = camelToKebab(name);
      const endpointUrl = url || `/api/events/${id}/${endpointName}/${itemId}`;

      const res = await this.$axios.delete(endpointUrl);

      this.$toast.success($nuxt.$t('toast.success.item_removed'));
      commit('updateEvent', { ...state.selectedEvent, [name]: res.data.data });
    } catch {
      this.$toast.error($nuxt.$t('toast.error.item_removed'));
    }
  },
};
