<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <router-view></router-view>
  <router-link :to="{ name: 'redapple', params: {} }">to redapple</router-link>
  <router-link :to="{ name: 'greenapple', params: {} }">to greenapple</router-link>

  <button type="button" name="button" @click="print">get params</button>
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'i am an apple'
    }
  },
  methods: {
    print() {
      console.log(this.$route.params);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

button {
  width: 100px;
  height: 20px;
}
</style>
