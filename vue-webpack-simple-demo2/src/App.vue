<template>
<div id="app">
  <p v-if="obj.array.length==0">123</p>
  <h1 v-if="obj.array.length>0">{{ obj.array }}</h1>
  <li v-for="item in obj.array">{{item}}</li>
  <button type="button" name="button" @click="change()">点击改变</button>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      obj: {
        array: [1, 2, 3]
      }
    }
  },
  mounted: function() {
    // var _this = this;
    // this.$nextTick(function() {
    //   _this.init();
    // })
  },
  method: {
    // init() {
    //   console.log(obj.array.length);
    // },
    // change() {
    //   console.log(1);
    // },

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

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
