<template lang="html">
  <div class="nav">
    <ul>
      <router-link to="/home" tag="li" active-class="active">首页</router-link>
      <router-link to="/follow" tag="li" active-class="active">关注</router-link>
      <router-link to="/column" tag="li" active-class="active">栏目</router-link>

    </ul>

  </div>


</template>

<script>
export default {}
</script>

<style lang="css">
.nav li{
  float: left;
  width: 20%;


}
</style>
