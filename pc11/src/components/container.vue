<template lang="html">
  <div class="container">
    <div class="banner">
      <div class="swiper-container" >
      <ul class='banner-ul swiper-wrapper'>
        <li class="swiper-slide"><img src="../assets/index-banner.png" alt=""></li>
         <!-- <li class="swiper-slide"><img src="../assets/banner2.png" alt=""></li>
          <li class="swiper-slide"><img src="../assets/banner3.png" alt=""></li> -->
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
      <div class="item-title">
        <h3>单身定制</h3>
        <p>尽管眼见距离多远，其实惊喜就在身边</p>
      </div>

      <ul class="clearfix">
        <li>
          <img  class="love_img" src="../assets/t1.png" alt="">
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
          <img  class="love_img" src="../assets/t3.png" alt="">
          <div class="love_hover">
            <h3>更多互动中认识的朋友</h3>
            <p>发现三观一致的人</p>
          </div>
      </li>
        <li>
        <img  class="love_img" src="../assets/t3.png" alt="">
        <div class="love_hover">
          <h3>更多互动中认识的朋友</h3>
          <p>发现三观一致的人</p>
        </div>
        </li>
          <li>
          <img  class="love_img" src="../assets/t3.png" alt="">
          <div class="love_hover">
            <h3>更多互动中认识的朋友</h3>
            <p>发现三观一致的人</p>
          </div>
          </li>
      </ul>
    </div>
    <div class="classic-f">
      <div class="classic ">
        <div class="item-title">
          <h3>情侣定制</h3>
          <p>以游记的方式回顾最精彩动人的片段</p>
        </div>
        <div class="classic-con clearfix">
          <div class="classic-l">
              <li><img src="../assets/coupon.png" alt=""> <span>爱可以一瞬间 <p>但真情需要时间的灌溉</p> </span></li>
          </div>
          <ul class="classic-r clearfix">
            <li v-for="item in list" ><a href="javascript:;"><img v-lazy="item.litpic" >
              <span> <i v-text="item.title">清远桃花湖</i>
              <p v-text="item.describe"></p>
            </span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="food">
      <div class="item-title">
        <h3>美食交友</h3>
        <p>唯独美食与你不可辜负</p>
      </div>
      <ul>
        <li><img src="../assets/food-1.png" alt=""> <span>爱可以一瞬间 <p>但真情需要时间的灌溉</p> </span></li>
        <li><img src="../assets/food-2.png" alt=""> <span>爱可以一瞬间 <p>但真情需要时间的灌溉</p> </span></li>
        <li><img src="../assets/food-1.png" alt=""> <span>爱可以一瞬间 <p>但真情需要时间的灌溉</p> </span></li>
        <li><img src="../assets/food-1.png" alt=""> <span>爱可以一瞬间 <p>但真情需要时间的灌溉</p> </span></li>
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
          <span class="divider"></span>
        </li>
        <li>
          <h3>经典回顾</h3>
          <p>最好的相遇总在路上</p>
          <p>旅行的意义,是遇见美好的你</p>
          <p>520那天,我们在桃花湖邂逅</p>
          <p>故宫禁忌,进入故宫后绝对不能做的事情</p>
          <span class="divider"></span>
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
          litpic: require('../assets/couple-m.png'),
          title: "清远桃花湖",
          describe: "以游记的方式回顾最精彩",
        },
        {
          litpic: require('../assets/couple-m.png'),
          title: "从化",
          describe: "以游记的方式回顾最精彩"
        },
        {
          litpic: require('../assets/couple-m.png'),
          title: "肇庆羚羊峡",
          describe: "以游记的方式回顾最精彩",

        },
        {
          litpic: require('../assets/couple-m.png'),
          title: "深圳西冲",
          describe: "以游记的方式回顾最精彩",
        }

      ]
    }
  },
  mounted() {
    // this.lunbo()
  },

  methods: {
    // lunbo() {
    //   var galleryTop = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     autoplay: 5000, //可选选项，自动滑动
    //     autoplayDisableOnInteraction: false
    //   })
    // }

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
  height: 1186px;
  background: url('../assets/index-banner.png');
  z-index: 1;
}
.banner-ul li{
  text-align: center;
}
.banner-ul li {

  width: 100%;
  height: 100%;
}
.phone{
  z-index: 99;
  position: relative;
  top: -60px;
  height: 592px;
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: #fff;
  box-shadow:2px 2px 5px #DDDDDD,-2px -2px 5px #ddd;
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
.item-title h3{
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 18px;
}
.item-title p{
  color:#999;
  font-size: 20px;
  margin-bottom: 36px;
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
  color:#99999;
  font-size: 20px;
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
  /*width: 212px;
  height: 294px;*/
  width: 242px;
  height: 336px;
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
/*.love li:hover img{
  width: 242px;
  height: 336px;
}*/
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


.classic-f{
  width: 100%;
  height: 804px;
  background: #fafafa;
}

.classic{
  width: 1200px;
  height: 804px;
  padding-top:68px;
  margin: 0 auto;
  background: #fafafa;
  box-sizing: border-box;
}
.classic-con{
  width: 1200px;
  height: 516px;
}
.classic-l{
  float: left;
  width: 388px;
  height:516px;
  list-style: none;
  margin-right: 18px;
  position: relative;
}
.classic-r{
  float: right;
  width: 794px;
  height: 516px;
}
.classic-r li{
  width: 388px;
  height: 250px;
  float: left;
  margin-right: 16px;
  margin-bottom: 18px;
  position: relative;
  overflow: hidden;
}

.classic li:nth-of-type(2){
  margin-right: 0;
}
.classic li:last-child{
  margin-right: 0;
}


.classic li span{
  width: 388px;
  height: 70px;
  position: absolute;
  left:0;
  bottom:-65px;
  background: rgba(0,0,0,0.3);
  transition:all 0.5s ease;
  color:#fff;
  line-height: 50px;
  font-size: 24px;
  opacity: 0;
  text-align: left;
  text-indent: 20px;
  line-height: 35px;
  padding-top: 10px;
  box-sizing: border-box;

}
.classic li span p{
  font-size: 20px;
  color:#fff;
  text-align: left;
  text-indent: 20px;
  line-height: 20px;
}
.classic li:hover span{
  bottom:3px;
  opacity: 0.8;
}

/*.classic img[lazy=loading]{
  width: 388px;
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
}*/

.cousltin{
  height: 260px;
  width: 1200px;
  margin: 0 auto;
}
.cousltin ul{
  margin-top: 140px;
}
.cousltin li{

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
.divider{
  position: absolute;
  right: 82px;
  top: 20px;
  display: block;
  width: 1px;
  height: 100px;
  border-left: 1px solid #ddd;
}
/*food*/
.food{
  width: 1200px;
  height: 590px;
  margin: 0 auto;
}

.food li{
  float: left;
  width: 290px;
  height: 386px;
  margin-right: 12px;
  position: relative;

}
.food li:last-child{
  margin-right: 0;
}

.food li span{
  width: 290px;
  height: 64px;
  position: absolute;
  left:0;
  bottom:-60px;
  background: rgba(0,0,0,0.3);
  transition:all 0.5s ease;
  color:#fff;
  line-height: 50px;
  font-size: 18px;
  opacity: 0;
  text-align: center;
  line-height: 24px;
  padding-top: 10px;
  box-sizing: border-box;
}
.food li span p{
  font-size: 14px;
  text-align: center;
}
.food li:hover span{
  opacity: 0.9;
  bottom:0;
}


</style>
