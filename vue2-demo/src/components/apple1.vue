<template>
<div class="hello">
  <h1>{{ msg }}</h1>

  <button type="button" name="button" @click="add">+1</button>
  <button type="button" name="button" @click="minus">-1</button>
</div>
</template>

<script>
export default {
  name: 'apple1',
  data() {
    return {
      msg: 'i am an apple',
      price: 8
    }
  },
  methods: {
    add() {
      this.$store.dispatch('increase', this.price);
    },
    minus() {
      this.$store.commit('decrement', this.price);
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
