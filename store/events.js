import fetchEvents from '~/middleware/fetch-events';

export const state = () => ({
  events: [],
  viewedEvent: null,
});

export const mutations = {
  setEvents(state, events) {
    state.events = [...events];
  },
  setViewedEvent(state, event) {
    state.viewedEvent = { ...event };
  },
};

export const actions = {
  async fetchEvents({ commit }) {
    const res = await this.$axios.get('/api/events');

    commit('setEvents', res.data.data);
  },
  async fetchEvent({ commit }, id) {
    const res = await this.$axios.get(`/api/events/${id}`);

    commit('setViewedEvent', res.data.data);
  },
};
