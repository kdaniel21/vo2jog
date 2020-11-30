import fetchEvents from '~/middleware/fetch-events';

export const state = () => ({
  events: [],
});

export const mutations = {
  setEvents(state, events) {
    state.events = [...events];
  },
};

export const actions = {
  async fetchEvents({ commit }) {
    const res = await this.$axios.get('/api/events');

    commit('setEvents', res.data.data);
  },
};
