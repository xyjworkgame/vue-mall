<template>
    <div>
        <order-header></order-header>
        <router-view/>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import OrderHeader from '../components/OrderHeader'
export default {
  name: 'Order',
  components:{
    OrderHeader,
    NavFooter
  }
}
</script>

<style scoped>

</style>
