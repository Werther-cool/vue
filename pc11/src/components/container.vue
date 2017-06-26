<template lang="html">
  <div class="container">
    <div class="banner">
      <ul class='banner-ul'>
        <li><img src="../assets/banner1.png" alt=""></li>
      </ul>
    </div>
    <div class="phone">
      <div class="qrcode">
       <h2>出发就是那么简单！</h2>
       <p class="qrcode-p">这世上没有谁离不开谁，只有谁更在乎谁。一趟旅程告诉我们，简单的喜欢最长远，懂你的人最温暖。</p>
        <img src="../assets/fdibu.png" alt="">
      <p class="qrcode-p2">1+1旅游公众号</p>
      </div>
      <div class="phoneimg">
        <img src="../assets/phone.png" alt="">
      </div>
    </div>
    <div class="love">
      <h3>一趟旅行，一见钟情</h3>
      <p>尽管眼见距离多远，其实惊喜就在身边</p>
      <ul class="clearfix">
        <li><a href=""><img src="../assets/t1-2.png" alt=""></a></li>
        <li><a href=""><img src="../assets/t2-2.png" alt=""></a></li>
        <li><a href=""><img src="../assets/t3-2.png" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
.container{
  /*width: 100%;*/
  text-align: center;
  font-size: 20px;
}
.banner{
  width: 100%;

}
.banner-ul li{
  text-align: center;
}
.banner-ul li img{
  width: 100%;
  height: 100%;
}
.phone{
  height: 660px;
  width: 1200px;

  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.qrcode{
  float: left;
  width: 360px;
  padding-top: 152px ;
  margin-left: 200px;
}
.qrcode h2{
  color:#333;
  font-size: 30px;
  margin-bottom: 20px;
}
.qrcode .qrcode-p{
  font-size: 20px;
  color:#949494;
  margin-bottom: 40px;
  text-align: left;

}
.qrcode .qrcode-p2{
  font-size: 18px;
  color:#666;
  margin-top: 20px;
}
.phoneimg{
  float: right;
  width: 50%;
  padding-top: 94px;
}
.love{
  padding-top: 108px;
  height: 740px;
  width: 1200px;
  margin: 0 auto;
  background: tan;
}
.love h3{
  font-size: 30px;
  margin-bottom: 20px;
}
.love p{
  color:#949494;
}
.love li{
  float: left;
  margin-right: 17px;
}
.love ul{
  margin-top: 50px;
}
.love li:last-child{
  margin-right: 0;
}
</style>
