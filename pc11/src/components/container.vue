<template lang="html">
  <div class="container">
    <div class="banner">
      <div class="swiper-container" >
      <ul class='banner-ul swiper-wrapper'>
        <li class="swiper-slide"><img src="../assets/banner1.png" alt=""></li>
         <li class="swiper-slide"><img src="../assets/banner2.png" alt=""></li>
          <li class="swiper-slide"><img src="../assets/banner3.png" alt=""></li>
      </ul>
    <div class="swiper-pagination"></div>
  </div>
    </div>
    <div class="phone clearfix">
      <div class="phoneimg">
        <img src="../assets/phone.png" alt="">
      </div>
      <div class="qrcode">
         <h2>出发就是那么简单！</h2>
         <p class="qrcode-p">这世上没有谁离不开谁，只有谁更在乎谁。一趟旅程告诉我们，简单的喜欢最长远，懂你的人最温暖。</p>
          <img src="../assets/fdibu.png" alt="">
        <p class="qrcode-p2">1+1旅游公众号</p>
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
          <img  class="love_img" src="../assets/t2.png" alt="">
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
        <li v-for="item in list" ><a href="javascript:;"><img v-lazy="item.litpic" ><span v-text="item.title">清远桃花湖</span></a></li>
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
import Swiper from '../../static/swiper.min.js'

export default {
  name: 'main',
  data() {
    return {
      list: [{
          litpic: require('../assets/qingyuan.png'),
          title: "清远桃花湖",
        },
        {
          litpic: require('../assets/conghua.png'),
          title: "从化",
        },
        {
          litpic: require('../assets/zhaoq.png'),
          title: "肇庆羚羊峡",
        },
        {
          litpic: require('../assets/huiz.png'),
          title: "深圳西冲",
        },
        {
          litpic: require('../assets/qingyuan.png'),
          title: "惠州巽寮湾",
        },
        {
          litpic: require('../assets/fous.png'),
          title: "佛山逢简水乡",
        }
      ]
    }
  },
  mounted() {
    this.lunbo()
  },

  methods: {
    lunbo() {
      var galleryTop = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        autoplay: 5000, //可选选项，自动滑动
        autoplayDisableOnInteraction: false
      })

    }
  }
}
</script>

<style lang="css">
@import url("../../static/swiper.min.css");

.container{
  /*width: 100%;*/
  text-align: center;
  font-size: 20px;
}
.banner{
  width: 100%;
  height: 1096px;

}
.banner-ul li{
  text-align: center;
}
.banner-ul li img{
  width: 100%;
  height: 100%;
}
.phone{
  height: 592px;
  width: 1200px;
  margin: 0 auto;

  text-align: center;
  background: #fff;
  box-shadow:2px 2px 5px #DDDDDD,-2px -2px 5px #ddd;
  margin-bottom: 20px;
}
.qrcode{
  float: left;
  width: 360px;
  padding-top: 152px ;

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
  float: left;
  width: 50%;
  padding-top: 94px;
  margin-left: 90px;
}
.love{
  padding-top: 108px;
  height: 740px;
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  box-sizing: border-box;
}
.love p{
  color:#949494;
}
.love li{
  transition: all 0.5s ease;
  width: 212px;
  height: 368px;
  display: inline-block;
  float: left;
  margin-right: 26px;
  position: relative;
  overflow: hidden;

}
.love_img{
  transition:all 0.5s ease;

}
.love .love_img{
  width: 212px;
  height: 294px;
  display: inline-block;
}

.love .love_hover{
  height: 74px;
  width: 212px;
  position: absolute;
  left:0;
  bottom:0px;
  background: #fff;
  text-align: center;
  transition:all 0.5s ease;

}
.love .love_hover h3{
  font-size:16px;
  margin-top: 20px;
  color:#333;
  margin-bottom: 5px;
  width: 100%;

}
.love .love_hover p{
  width: 100%;

  font-size: 12px;
  font-weight: lighter;
  color:#999;
}

.love li:hover{
  width: 242px;
  height: 410px;
  box-shadow: 2px 2px 3px #cfcfcf,-2px 2px 3px #cfcfcf;
  text-align: center;
}
.love li:hover img{
  width: 242px;
    height: 336px;
}
.love li:hover .love_hover h3{
    font-size: 18px;
}
.love li:hover .love_hover p{
  font-size:14px
}
.love li:hover .love_hover{
  width: 242px;
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
  background: url(../assets/bantouming.png);
  transition:all 0.5s ease;
  color:#fff;
  line-height: 50px;
  font-size: 20px;

}
.classic li:hover span{
  bottom:3px;
}

.classic img[lazy=loading]{
  width: 389px;
  height: 235px;
  background: url('http://via.placeholder.com/389x235');
}
img[lazy=loaded]{
  animation:fade 0.5s;
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
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
