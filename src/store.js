// src/store.js
export const state = () => ({
    dayMode: true,
  })
  
  export const mutations = {
    SET_DAY_MODE(state, dayMode) {
      state.dayMode = dayMode;
    },
  }
  
  export const actions = {
    setDayMode({ commit }, dayMode) {
      commit('SET_DAY_MODE', dayMode);
    },
  }