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
        <li>
          <div class="love_hover">
            <h3>寻找你心仪的另一半</h3>
            <p>众里寻他千百度</p>
          </div>
        </li>
        <li>
          <div class="love_hover">
            <h3>情侣之间的互动</h3>
            <p>增进感情,也考验着对方的用心</p>
          </div>
        </li>
        <li>
          <div class="love_hover">
            <h3>更多互动中认识的朋友</h3>
            <p>发现三观一致的人</p>
          </div>
      </li>
      </ul>
    </div>
    <div class="classic">
      <h3>经典回顾</h3>
      <p>以游记的方式回顾最精彩动人的片段</p>
      <ul class="clearfix">
        <li><a href="javascript:;"><img src="../assets/qingyuan.png" alt=""><span>清远桃花湖</span></a></li>
        <li><a href="javascript:;"><img src="../assets/conghua.png" alt=""><span>从化</span></a></li>
        <li><a href="javascript:;"><img src="../assets/zhaoq.png" alt=""><span>肇庆羚羊峡</span></a></li>
        <li><a href="javascript:;"><img src="../assets/shenz.png" alt=""><span>深圳西冲</span></a></li>
        <li><a href="javascript:;"><img src="../assets/huiz.png" alt=""><span>惠州巽寮湾</span></a></li>
        <li><a href="javascript:;"><img src="../assets/fous.png" alt=""><span>佛山逢简水乡</span></a></li>
      </ul>
    </div>
    <div class="cousltin">
      <ul class="clearfix">
        <li>
          <h3>用户帮助</h3>
          <p>报名的时候能报一人以上?</p>
          <p>单身定制路线能否同时报名2人以上?</p>
          <p>0元购活动如何参与?</p>
          <p>如何绑定手机号码?</p>
        </li>
        <li>
          <h3>经典回顾</h3>
          <p>最好的相遇总在路上</p>
          <p>旅行的意义,是遇见美好的你</p>
          <p>520那天,我们在桃花湖邂逅</p>
          <p>故宫禁忌,进入故宫后绝对不能做的事情</p>
        </li>
        <li>
          <h3>联系我们</h3>
          <p>客服电话:020-82516031</p>
          <p>传真电话:020-32211192</p>
          <p>地址:广州市黄埔区科学大道99号科汇金谷</p>
          <p>科汇一街11号11楼</p>
        </li>
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
  background: #fff;
  box-sizing: border-box;
}

.love h3{
  font-size: 30px;
  margin-bottom: 20px;
}
.love p{
  color:#949494;
}
.love li{
  transition: all 0.5s ease;
  width: 388px;
  height: 516px;
  display: inline-block;
  float: left;
  margin-right: 17px;
  position: relative;
  overflow: hidden;

}
.love .love_hover{
  height: 136px;
  width: 388px;
  position: absolute;
  left:0;
  bottom:-136px;
  background: #ff5d8b;
  opacity: 0.4;
  color:#fff;
  text-align: center;
  transition:all 0.5s ease;

}
.love .love_hover h3{
  font-size:24px;
  margin-top: 20px;
  color:#fff;
}
.love .love_hover p{
  font-size: 22px;
  color:#fff;
}
.love li:nth-of-type(1){
  background: url("../assets/t1-2.png");
}
.love li:nth-of-type(1):hover{
  background: url("../assets/t1.png");
}
.love li:hover .love_hover{
  bottom:0;
}
.love li:nth-of-type(2){


  background: url("../assets/t2.png");
}
.love li:nth-of-type(2):hover{

  background: url("../assets/t2-2.png");
}
.love li:nth-of-type(3){
  background: url("../assets/t3-2.png");
}
.love li:nth-of-type(3):hover{
  background: url("../assets/t3.png");
}
.love ul{
  margin-top: 50px;
}
.love li:last-child{
  margin-right: 0;
}
.classic{
width: 1200px;
height: 800px;
padding-top: 197px;
margin: 0 auto;
background: #fff;
box-sizing: border-box;
}
.classic li{
  float: left;
  margin-right: 16px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}
.classic li:nth-of-type(3){
  margin-right: 0;
}
.classic li:last-child{
  margin-right: 0;
}
.classic h3{
  font-size: 30px;
  margin-bottom: 20px;
}
.classic p{
  color:#949494;
}
.classic ul{
  margin-top: 50px;
}
.classic li span{
    width: 388px;
  height: 50px;
  position: absolute;
  left:0;
  bottom:-45px;
  background: url("../assets/bantouming.png");
  transition:all 0.5s ease;
  color:#fff;
  line-height: 50px;
  font-size: 20px;

}
.classic li:hover span{
  bottom:3px;
}
.cousltin{
  height: 260px;
  width: 1200px;
  margin: 0 auto;
}
.cousltin ul{
  margin-top: 140px;
}
.cousltin li{
  border-left: 1px dashed #ddd;
  float: left;
  width: 425px;
  text-align: left;
  text-indent: 20px;
  position: relative;
}
.cousltin li:last-child{
  width: 330px;
}
.cousltin li h3{
  font-size: 20px;
  color:#333;

}
.cousltin li p{
  margin-top: 10px;
  color:#666;
  font-size: 16px;
}
</style>
