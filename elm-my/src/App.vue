<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import { urlParse } from "common/js/util";
import header from "components/header/header.vue";



export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    "v-header":header
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
