export const state = () => ({
  currentCode: null,
})

export const mutations = {
  updateCurrentCode(state, code) {
    state.currentCode = code
  },
}

export const actions = {
  updateCurrentCode(vuexContext, code) {
    vuexContext.commit('updateCurrentCode', code)
  },
}
