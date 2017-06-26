<template lang="html">
  <div class="myHeader">
      <div class="head">
        <h1><img src="../assets/logo.png" alt=""></h1>
        <ul class="clearfix head-ul">
          <li><a href="javascript:;" class="font-red">首页</a>|</li>
          <li><a href="javascript:;">经典回顾</a>|</li>
          <li><a href="javascript:;">关于我们</a>|</li>
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

}
.head{
  width: 1200px;
  height: 115px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}
.head h1{
  width: 139px;
  height: 75px;
  margin-top: 25px;
  margin-left: 10px;
  float: left;
}
.head-ul{
  margin-top: 30px;
  float: right;
}
.head-ul li{
  color:#ddd;
  font-weight: 300px;
  font-size: 18px;
  float: left;
  padding:40px 0;
}
.head-ul li a{
    font-size: 20px;
    color: #666;
  padding:0 60px;
}

</style>
