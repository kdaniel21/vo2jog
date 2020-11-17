import camelToKebab from '@/assets/utils/camelToKebab';

export const state = () => ({
  selectedEvent: null,
  events: [],
});

export const getters = {};

export const mutations = {
  setSelectedEvent(state, eventId) {
    const index = state.events.findIndex(event => event._id === eventId);

    state.selectedEvent = state.events[index];
  },
  setEvents(state, events) {
    state.events = [...events];
  },
  addEvent(state, event) {
    state.events.push({ ...event });
  },
  updateEvent(state, updatedEvent) {
    const { _id } = updatedEvent;
    const index = state.events.findIndex(event => event._id === _id);

    if (index === -1) return;

    // Update selectedEvent if needed
    if (state.selectedEvent._id === updatedEvent._id)
      Object.assign(state.selectedEvent, { ...updatedEvent });

    Object.assign(state.events[index], { ...updatedEvent });
  },
};

export const actions = {
  async fetchEvents({ commit }) {
    const res = await this.$axios.get('/api/profile/events');

    const events = res.data.data;
    if (events.length > 0) commit('setEvents', events);
  },
  preSelectEvent({ commit }) {
    if (process.browser && localStorage.getItem('selectedEventId')) {
      commit('setSelectedEvent', localStorage.getItem('selectedEventId'));
    }
  },
  selectEvent({ commit }, eventId) {
    if (process.browser) localStorage.setItem('selectedEventId', eventId);

    commit('setSelectedEvent', eventId);
  },
  async createEvent({ commit }, newEvent) {
    const res = await this.$axios.post('/api/events', newEvent);

    commit('addEvent', res.data.data);
  },
  async updateEvent({ commit, state }, updatedItems) {
    const { _id } = state.selectedEvent;
    const res = await this.$axios.patch(`/api/events/${_id}`, updatedItems);

    commit('updateEvent', res.data.data);
  },
  async addItem({ commit, state }, { name, data, url }) {
    const { _id } = state.selectedEvent;
    const endpointName = camelToKebab(name);
    const endpointUrl = url || `/api/events/${_id}/${endpointName}`;

    const res = await this.$axios.post(endpointUrl, data);

    commit('updateEvent', { ...state.selectedEvent, [name]: res.data.data });
  },
  async updateItem({ commit, state }, { name, itemId, data, url }) {
    const { _id } = state.selectedEvent;
    const endpointName = camelToKebab(name);
    const endpointUrl = url || `/api/events/${_id}/${endpointName}/${itemId}`;

    const res = await this.$axios.patch(endpointUrl, data);

    commit('updateEvent', { ...state.selectedEvent, [name]: res.data.data });
  },
  async deleteItem({ commit, state }, { name, itemId, url }) {
    const { _id } = state.selectedEvent;
    const endpointName = camelToKebab(name);
    const endpointUrl = url || `/api/events/${_id}/${endpointName}/${itemId}`;

    const res = await this.$axios.delete(endpointUrl);

    commit('updateEvent', { ...state.selectedEvent, [name]: res.data.data });
  },
};
