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
    const res = await this.$axios.get('/profile/events');

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
    const res = await this.$axios.post('/events', newEvent);

    commit('addEvent', res.data.data);
  },
  async updateEvent({ commit, state }, updatedItems) {
    const { _id } = state.selectedEvent;
    const res = await this.$axios.patch(`events/${_id}`, updatedItems);

    commit('updateEvent', res.data.data);
  },
  async addFaq({ commit, state }, faq) {
    const { _id } = state.selectedEvent;
    const res = await this.$axios.post(`/events/${_id}/faq`, faq);

    commit('updateEvent', { ...state.selectedEvent, faq: res.data.data });
  },
  async deleteFaq({ commit, state }, faqId) {
    const { _id } = state.selectedEvent;
    const res = await this.$axios.delete(`/events/${_id}/faq/${faqId}`);

    commit('updateEvent', { ...state.selectedEvent, faq: res.data.data });
  },
};
