<template lang="html">
  <div id="index">
      <div class="index_hd" v-cloak>
          <span :class="{on:nowPlace==77}" @click="place(77)">佛山</span>
          <em>|</em>
          <span :class="{on:nowPlace==75}" @click="place(75)">广州</span>
      </div>
      <div class="index_banner" v-cloak>
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in slides">
                <a :href="item.adlink"><img :src="item.adsrc"></a>
            </div>
            </div>
             <div class="swiper-pagination"></div>
        </div>
      </div>
        <ul class="pair_bd_hd clearfix" v-cloak>
            <li><a href="/line/single"><img src="../assets/images/danshen02.png" alt=""></a> <p>都市交友</p> </li>
            <li><a href="/line/food"><img src="../assets/images/meishi02.png" alt=""></a><p>美食交友</p></li>
            <li><a href="/line/couple"><img src="../assets/images/qinglv02.png" alt=""></a><p>休闲度假</p></li>
            <li><a href="/line/team"><img src="../assets/images/tuandui02.png" alt=""></a><p>团队定制</p></li>
            <li><a :href="'/leader/index/'+ time"><img src="../assets/images/lingdui02.png" alt=""></a><p>领队动态</p></li>
        </ul>

        <div class="objective" v-cloak>
            <img src="../assets/images/objective.png" alt="" >
        </div>
         
        <div class="index_active clearfix" v-cloak v-if="nowPlace==75">
            <a href="/line/newUserOnly" class="active_event">
                <h3>新人专享</h3>
                <p>双重惊喜欢迎你</p>
                <img src="../assets/images/index_a1.png" alt="">
            </a>
            <a href="/line/group/index" class="active_event">
                <h3>人气拼团</h3>
                <p>拼人品超低价</p>
                <img class="index_a2" src="../assets/images/index_a2.png" alt="">
            </a>
        </div>

           <!-- 本周活动 -->
      <div class="pair_nav" v-cloak v-if="nowPlace==75">
        <div class="pair_nav_hd clearfix">
          <ul class="clearfix">
            <li :class="{'nav_on': navNum==0}" @click="nav(0)"><a>本周活动</a></li>
            <li :class="{'nav_on': navNum==1}" @click="nav(1)"><a>下周活动</a> </li>
            <li :class="{'nav_on': navNum==2}" @click="nav(2)"><a>纪念月活动</a> </li>
          </ul>
        </div>
          <div class="tag_container" v-cloak>
            <div  v-swiper:mySwiper="swiperOption1" class="swiper-container1">
               <div class="swiper-wrapper">
                  <li  class="swiper-slide"  v-for="item in lineList">
                    <a class="tag_slide" :href="'/line/detail/' + item.id">
                    <img  :src="item.litpic"></a>
                    <span class="swiper-icon" v-if="item.linetype == 0"><img src="../assets/images/dsjy.png" alt=""></span>
                    <span class="swiper-icon" v-if="item.linetype == 1"><img src="../assets/images/msjy.png" alt=""></span>
                    <span class="swiper-icon" v-if="item.linetype == 2"><img src="../assets/images/xxdj.png" alt=""></span>
                    <span class="swiper-icon" v-if="item.linetype == 3"><img src="../assets/images/tddz.png" alt=""></span>
                    <h4>{{item.sellpoint|sub}}</h4>
                    <p class="swiperP">
                      <span>{{item.linedate |weekday}}</span>
                      <span class="deepRed ft14">¥<i v-text="item.storeprice" class="ft14">24</i></span>
                      <span v-if="item.status==0" class="swiper-status"><img src="../assets/images/sign.png" alt=""></span>
                      <span v-if="item.status==1" class="swiper-status"><img src="../assets/images/signfull.png" alt=""></span>
                      <span v-if="item.status==2" class="swiper-status"><img src="../assets/images/hastravel.png" alt=""></span>
                    </p>
                      <!-- <span class="group_icon" v-if="item.group_status == 1"></span> -->
                  </li>
                  <!-- <li  class="swiper-slide"></li> -->
                </div>
              </div>
           </div>
       </div>  
    </div>
</template>

<script>
import Banner from '../components/Banner'
import * as datefilter from '../util/datefilter'
export default {
  name:'Index',
  data(){
      return{
          navNum:0,
          time:'123456',
          nowPlace:75,
          lineList:[],
          slides:[],
          swiperOption:
                        { 
                        autoplay: true,
                        direction : 'horizontal',
                        pagination: {
                                    el: '.swiper-pagination',
                                    dynamicBullets: true
                                },
                        },
           swiperOption1:
                        { 
                        autoplay: false,
                        direction : 'horizontal',
                        slidesPerView: 3,
                         spaceBetween: 5
                        },     
      }
  },
  components:{
     
  },
  created:function () {
         this.$http.get('/mock/banner.json')
              .then((res) => {
                console.log(res);
                this.slides = res.body
              }, (err) => {
                console.log(err)
              })
        // this.$http.get('/tp/Api/Ad/banners',{params:{'posId':'14'}})
        //     .then((res) => {
        //     console.log(res);
        //     // this.slides = res.data
        //     }, (err) => {
        //     console.log(err)
        //     })
        this.$http.get('/tp/Api/line/getWeekLines',{params:{'appid':'1','type':'2'}})
        .then((res) => {
        var res = res.bodyText;
        res= eval('('+res+')');
        this.lineList = res.data;    
        console.log(this.lineList);
        }, (err) => {
        console.log(err)
        })
        this.$http.get('/tp/Api/line/getHotLines')
        .then((res) => {
        console.log(res);
        // this.slides = res.data
        }, (err) => {
        console.log(err)
        })
  },
  methods:{
        nav:function (navNum) {
            this.navNum =navNum;
            // this.mySwiper.update({
            // updateTranslate:true
            // });
        },
  },
  filters:{
       sub: mes=> {
            if(mes.length>7){
            return mes.slice(0,7)
            }else{
            return mes
            }
        },
        weekday:datefilter.weekday,
        UTday:datefilter.UTday
       
  }
}
</script>

<style lang="css" >
@import url("../assets/css/device");
@import url("../assets/css/common.css");
@import url("../assets/css/index2.css"); 

.index_banner a{
    width: 100%;
    height: 100%;
    display: inline-block;
}
.index_banner a img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.swiper-container{
    height: 100%;
}
.index_banner .swiper-pagination-bullet {
    background: rgba(255,255,255,0.9);
}
.index_banner .swiper-pagination-bullet {
    background: rgba(255,255,255,1);
}

</style>


