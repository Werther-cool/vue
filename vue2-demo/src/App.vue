<template>
<div id="app">
  <!-- <keep-alive>
    <router-view></router-view>
  </keep-alive> -->
  <!-- <router-link :to="{ name: 'apple', params: {} }">to apple</router-link>
  <router-link :to="{ name: 'redapple', params: {} }">to redapple</router-link>
  <router-link :to="{ name: 'greenapple', params: {} }">to greenapple</router-link>
  <router-link :to="{ name: 'banana', params: {} }">to banana</router-link> -->


  {{totalPrice}}
  <Apple></Apple>
  <Banana></Banana>
</div>
</template>

<script>
import Apple from './components/apple1'
import Banana from './components/banana1'

export default {
  components: {
    Apple,
    Banana
  },
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice
    }
  }
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
