/* eslint-disable no-undef */
import flattenAndMergeCategories from '@/assets/utils/flatten-merge-categories';
import filterFilters from '@/assets/utils/filter-filters';

export const state = () => ({
  events: [],
  filters: {},
  categories: [],
});

export const getters = {
  mainCategories(state) {
    return state.categories.map(category => category.name);
  },
  subcategories(state) {
    if (!state.categories) return;
    const { filters } = state;

    let categories = [...state.categories];
    if (filters.main) {
      const { main } = filters;
      categories = categories.filter(category => main.includes(category.name));
    }

    return flattenAndMergeCategories(categories);
  },
  getCategoryItems(state, getters) {
    return subcategory => {
      const { subcategories } = getters;
      const index = subcategories.findIndex(({ name }) => name === subcategory);
      if (index === -1) return;

      return subcategories[index].categoryItems;
    };
  },
};

export const mutations = {
  setEvents(state, events) {
    state.events = events;
  },
  setCategories(state, categories) {
    state.categories = [...categories];
  },
  setFilters(state, filters) {
    state.filters = { ...filters };
  },
};

export const actions = {
  async fetchEvents({ commit, state }) {
    const res = await this.$axios.get('/api/events', { params: state.filters });

    if (res.data.data) commit('setEvents', res.data.data);
  },
  async fetchCategories({ commit }) {
    const res = await this.$axios.get('/api/categories');
    if (!res.data.data.length) return;

    commit('setCategories', res.data.data);
  },
  loadFilters({ commit, dispatch }) {
    if (process.client) commit('setFilters', $nuxt._route.query);

    dispatch('fetchEvents');
  },
  setFilter({ commit, getters, state, dispatch }, filter) {
    // Set query params
    let query = { ...state.filters, ...filter };

    // Clean unavailable filters due to main category change
    if (Object.keys(filter).includes('main')) {
      commit('setFilters', query);
      query = filterFilters(query, getters.subcategories);
    }

    commit('setFilters', query);
    $nuxt._router.push({ query });

    // Fetch events TODO:
    dispatch('fetchEvents');
  },
  resetFilters({ commit }) {
    $nuxt._router.push({ query: null });
    commit('setFilters', null);
  },
};
