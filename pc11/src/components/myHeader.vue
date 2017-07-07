<template lang="html">
  <div class="myHeader">
      <div class="head">
        <h1><img src="../assets/logo.png" alt=""></h1>
        <ul class="clearfix head-ul">
          <li><a href="javascript:;" class="font-red">首页</a></li>
          <li><a href="javascript:;">经典回顾</a></li>
          <li><a href="javascript:;">关于我们</a></li>
          <li><a href="javascript:;">服务与帮助</a></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">

.myHeader{
  width: 100%;
  height: 90px;
  background:rgba(255,255,255,0.2);
  position: absolute;
  left: 0;
  top: 0;
  z-index:200
}
.head{
  width: 1200px;
  height: 90px;
  margin: 0 auto;
  background:rgba(255,255,255,0.2);
  overflow: hidden;
}
.head h1{
  width: 237px;
  height: 75px;
  float: left;
}
.head-ul{
  float: left;
}
.head-ul li{
  color:#333;
  font-size: 20px;
  float: left;
  height: 90px;
  line-height: 90px;
  margin-right: 60px;
}
.head-ul li:first-child{
  width: 78px;
}


</style>
