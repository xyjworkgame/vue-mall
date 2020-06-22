/**
 * 商城Vuex-mutations
 */
export default {
  saveUserName (state, username) {
    state.username = username
  },
  saveCarCount(state,count){
    state.cartCount = count
  }
}
