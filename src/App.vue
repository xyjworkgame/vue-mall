<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>


export default {
  name: 'app',
  mounted () {
    if (this.$cookie.get('userId')){

    this.getUser();
    this.getCartCount();
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        // 保存到vuex里面
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/user').then((res=0)=>{
        // 获取购物车数据保存到vuex里面
        this.$store.dispatch('saveCarCount',res)

      })
    }
  }


}
</script>
<style lang="scss">
    @import './assets/scss/reset.scss';
    @import './assets/scss/config.scss';
    @import './assets/scss/button.scss';
    @import "assets/scss/mixin.scss";
    @import './assets/scss/modal.scss';
</style>
