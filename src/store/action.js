/**
 * 商城Vuex-actions
 */
export default {
 saveUserName(context,username){
   context.commit('saveUserName',username);
 },
  saveCarCount(context,count){
    context.commit('saveCarCount',count);
  }
}
