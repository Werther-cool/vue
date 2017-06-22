<template>
<div id="app">
  <keep-alive>
    <router-view></router-view>

  </keep-alive>

  <!-- <router-view name="viewB"></router-view>
  <router-view name="viewA"></router-view> -->


  <router-link :to="{ name: 'apple', params: {} }">to apple</router-link>
  <router-link :to="{ name: 'redapple', params: {} }">to redapple</router-link>
  <router-link :to="{ name: 'greenapple', params: {} }">to greenapple</router-link>
  <router-link :to="{ name: 'banana', params: {} }">to banana</router-link>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
