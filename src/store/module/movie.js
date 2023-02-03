const state = {
  isLoading: false,
};
const getters = {
  isLoading: (state) => state.isLoading,
};
const mutations = {
  SET_IS_LOADING: (state, payload) => {
    state.isLoading = payload;
  },
};
const actions = {
  setIsLoading({ commit }, payload) {
    commit("SET_IS_LOADING", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
