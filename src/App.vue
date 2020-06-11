<template>
<div></div>
</template>
<script>

import Storage from './store'
export default {
  name: 'app',
  data(){
    return{}
  },
  mounted () {
    // Storage.setItem('a', 1);
    // Storage.setItem('user', {a:1});
    Storage.setItem('abcd', {a:1},'user');

  }
}
</script>
<style>

</style>
