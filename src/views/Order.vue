<template>
    <div>
<!--        <order-header v-bind:title="title">-->
<!--            <template v-slot:tip>-->
<!--                <span>{{tip}}</span>-->
<!--            </template>-->
<!--        </order-header>-->
        <router-view/>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import ServiceBar from '../components/ServiceBar'
export default {
  name: 'Order',
  components:{
    NavFooter,
    ServiceBar
  },
  data(){
    return {
      title:'',
      tip:''
    }
  },
}
</script>

<style scoped>

</style>
