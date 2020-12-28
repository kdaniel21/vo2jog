/* eslint-disable no-undef */
import flattenAndMergeCategories from '@/assets/utils/flatten-merge-categories';
import filterFilters from '@/assets/utils/filter-filters';

export const state = () => ({
  currentPage: 1,
  resultsPerPage: 10,
  totalNumOfResults: null,
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
  setEvents(state, { events, length }) {
    state.events = [...events];
    state.totalNumOfResults = length;
  },
  setCategories(state, categories) {
    state.categories = [...categories];
  },
  setFilters(state, filters) {
    state.filters = { ...filters };
  },
  setPage(state, page) {
    state.currentPage = page;
  },
};

export const actions = {
  async fetchEvents({ commit, state }) {
    const { filters, currentPage, resultsPerPage } = state;
    const res = await this.$axios.get('/api/events', {
      params: { ...filters, page: currentPage, limit: resultsPerPage },
    });

    const { data, length } = res.data;
    commit('setEvents', { events: data, length });
  },
  async setPage({ commit, dispatch }, page) {
    commit('setPage', page);
    await dispatch('setRouteQuery');
    dispatch('fetchEvents');
  },
  async fetchCategories({ commit }) {
    const res = await this.$axios.get('/api/categories');
    if (!res.data.data.length) return;

    commit('setCategories', res.data.data);
  },
  loadFilters({ commit, dispatch }, query) {
    if (!query) query = $nuxt._route.query;
    commit('setFilters', query);
    if (query.page) commit('setPage', query.page);

    return dispatch('fetchEvents');
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
    dispatch('setRouteQuery');
    dispatch('fetchEvents');
  },
  resetFilters({ commit, dispatch }) {
    commit('setFilters', null);
    dispatch('setRouteQuery');
    dispatch('fetchEvents');
  },
  setRouteQuery({ state }) {
    const query = { ...state.filters, page: state.currentPage };

    $nuxt._router.push({ query });
  },
};
