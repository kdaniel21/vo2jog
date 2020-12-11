/* eslint-disable no-undef */
import flattenAndMergeCategories from '@/assets/utils/flatten-merge-categories';
import filterFilters from '@/assets/utils/filter-filters';

export const state = () => ({
  filters: {},
  categories: [],
});

export const getters = {
  mainCategories(state) {
    return state.categories.map(category => category.name);
  },
  subcategories(state) {
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
  setCategories(state, categories) {
    state.categories = [...categories];
  },
  setFilters(state, filters) {
    state.filters = { ...filters };
  },
};

export const actions = {
  async fetchCategories({ commit }) {
    const res = await this.$axios.get('/api/categories');
    if (!res.data.data.length) return;

    commit('setCategories', res.data.data);
  },
  loadFilters({ commit }) {
    if (process.client) commit('setFilters', $nuxt._route.query);
  },
  setFilter({ commit, getters, state }, { filterName, values }) {
    // Set query params
    console.log('setting filter');
    console.log('current query', $nuxt._route.query);
    console.log('current state', state.filters);
    let query = { ...state.filters, [filterName]: values };

    // Clean unavailable filters due to main category change
    if (filterName === 'main') {
      commit('setFilters', query);
      query = filterFilters(query, getters.subcategories);
    }

    if (filterName === 'start') {
      query.start = query.start.toISOString();
      console.log('STRING!!', query.start);
    }

    commit('setFilters', query);
    console.log('set', query);
    $nuxt._router.push({ query });
    console.log('pushed', $nuxt._route.query);
    console.log('----------------');

    // Fetch events TODO:
  },
  resetFilters({ commit }) {
    $nuxt._router.push({ query: null });
    commit('setFilters', null);
  },
};
