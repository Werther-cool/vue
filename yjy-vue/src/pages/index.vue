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
                <a :href="item.bannerThumb"><img v-lazy="item.bannerImg"></a>
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
            <li :class="{'nav_on': navNum==1}" @click="nav(1)"><a>本周活动</a></li>
            <li :class="{'nav_on': navNum==2}" @click="nav(2)"><a>下周活动</a> </li>
            <li :class="{'nav_on': navNum==3}" @click="nav(3)"><a>纪念月活动</a> </li>
          </ul>
        </div>
          <div class="tag_container" v-cloak>
            <div  v-swiper:mySwiper1="swiperOption1" class="swiper-container1">
               <div class="swiper-wrapper">
                  <li  class="swiper-slide"  v-for="item in lineList">
                    <a class="tag_slide" :href="'/line/detail/' + item.id">
                    <img  v-lazy="item.litpic"></a>
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

        <!-- 度假start -->
       <div class="holiday"  v-cloak v-if="nowPlace==75">
         <h2><img src="../assets/images/index_t1.png" alt=""></h2>
            <ul class="holiday_ul">
               <li  v-for="item in holiday">
                 <a :href="'/line/detail/' + item.id" class="holiday_img"><img v-lazy="item.litpic"></a>
                  <p class="holiday_li_title" v-text="item.title">清远桃花湖一日游长标题清远桃花湖一日游长标题width</p>
                  <span class="deepRed">¥<i v-text="item.storeprice">1800</i>/人</span>
                  <span  class="swiper-status"><img src="../assets/images/sign.png" alt=""></span>
                    <span v-if="item.status==1" class="swiper-status"><img src="../assets/images/signfull.png" alt=""></span>
                    <span v-if="item.status==2" class="swiper-status"><img src="../assets/images/hastravel.png" alt=""></span>
               </li>
             </ul>
       </div>
       <!-- 度假end -->
         <!-- 团队start -->
       <div class="team_custom" v-cloak v-if="nowPlace==75">
         <div class="team_title">
           <h2><img src="../assets/images/index_t2.png" alt=""></h2>
           <p>-- 我的团队我做主 --</p>
         </div>
         <a href="/line/team" class="team_banner_img"><img src="../assets/images/team_banner.png" alt=""></a>
         <ul class="team_ul clearfix">
           <li><a href="/line/team" class="team_nav_img"><img  src="../assets/images/team_nav1.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img    src="../assets/images/team_nav2.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/team_nav3.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/team_nav4.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img  src="../assets/images/team_nav5.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/team_nav6.png" alt=""></a></li>
         </ul>
       </div>
       <!-- 团队end -->

        <!-- 爆款路线 hotline start -->
       <div class="hotline" v-cloak >
         <div class="hotline_title">
           <h2><img src="../assets/images/index_t3.png" alt=""></h2>
           <p>-- 精心设计,极致体验 --</p>
         </div>
         <div class="hotlist" v-for="(item,index) in hotlist">
           <a :href="'/line/detail/' + item.id" class="hotlist_img">
            <img  v-lazy="item.covpic" alt="">
             <span>0{{index+1}}</span>
             <div class="hot_mask">
                <p>{{item.title}}</p>
             </div>
           </a>
         </div>
       </div>
       <!-- 爆款路线 hotline end -->


       <!--  随便逛逛 start -->
       <div class="stroll"  v-cloak >
         <div class="hotline_title">
           <h2>历史回顾</h2>
           <p>-- 为你优选 --</p>
         </div>
         <div class="stroll_list clearfix" v-for="item in historyLines" >
           <div class="stroll-l">
             <a :href="'/line/detail/' + item.id +'?linedateId='+item.linedateId"  class="stroll_img"><img v-lazy="item.litpic" alt=""></a>
           </div>
           <a :href="'/line/detail/' + item.id +'?linedateId='+item.linedateId" class="stroll-r">
              <h3>{{item.title}}</h3>
              <p class="stroll_time">出发时间 : {{item.linedate | UTday}} ({{item.linedate | weekday}})</p>
              <p>领队 {{item.nickname}}</p>
              <!-- <span class="sign-icon" v-if="item.status == 0"><img src="../assets/images/sign.png" alt=""></span>
              <span class="sign-icon" v-if="item.status == 1"><img src="../assets/images/signfull.png" alt=""></span>
              <span class="sign-icon" v-if="item.status==2" ><img src="../assets/images/hastravel.png" alt=""></span> -->

           </a>
         </div>
       </div>
       <!-- 随便逛逛 end -->
       <FootNav></FootNav>
    </div>
</template>

<script>
import Banner from '../components/Banner'
import FootNav from '../components/FootNav'
import * as datefilter from '../util/datefilter'
export default {
  name:'Index',
  data(){
      return{
          navNum:0,
          time:'123456',
          nowPlace:75,
          lineList:[],  //本周活动
          lineCache:[], //本周活动的父级,用以缓存数据
          slides:[],    //banner
          holiday:[],
          hotlist:[],
          historyLines:[], //历史回顾
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
                         spaceBetween: 8
                        },
      }
  },
  components:{
     FootNav
  },
  created:function () {
        //  this.$http.get('/mock/banner.json')
        //       .then((res) => {
        //         console.log(res);
        //         this.slides = res.body
        //       }, (err) => {
        //         console.log(err)
        //       })
        this.$http.get('/tp/Api/Ad/banners',{params:{'posId':14}})
            .then((res) => {

         this.slides = res.body.data;
            }, (err) => {
            console.log(err)
            })
        this.$http.get('/tp/Api/line/getWeekLines',{params:{'appid':'1','type':'2'}})
        .then((res) => {
         this.lineList = res.body.data;
        }, (err) => {
        console.log(err)
        })

         this.$http.get('/tp/Api/line/getCityList')
         .then((res) => {
       console.log(res);
          var res = res.body.data;
            for(let i =0;i<res.length;i++){
              if (res[i].status==1){

                this.nowPlace=res[i].id;
                  console.log( this.nowPlace);
              }
            }

         }, (err) => {
         console.log(err)
         })

        this.$http.get('/tp/Api/line/getHolidayLines')
        .then((res) => {

        this.holiday = res.body.data;
        }, (err) => {
        console.log(err)
        });
         this.$http.get('/tp/Api/line/getHotLines')
        .then((res) => {

        this.hotlist = res.body.data;
        }, (err) => {
        console.log(err)
        })
         this.$http.get('/tp/Api/line/getHistoryLines')
        .then((res) => {

        this.historyLines = res.body.data;
        }, (err) => {
        console.log(err)
        })
        //  this.$http.get('/tp/Api/Ad/banners',{params:{'posId':16}})
        // .then((res) => {
        // console.log(res);
        // this.historyLines = res.body.data;
        // }, (err) => {
        // console.log(err)
        // })
        this.nav(1);
  },
  methods:{
        nav(navNum) {

            this.navNum =navNum;
            /* 先判断是否请求过 */
            if ( !this.lineCache[navNum]) {
                this.getWeekLine(navNum);

            }else{
              this.lineList=this.lineCache[navNum];
                // console.log(this.lineCache);

            }

            setTimeout(() => {

               this.mySwiper1.update({
              updateTranslate:true
              });
            }, 300);

        },
        getWeekLine(num){
            this.$http.get('/tp/Api/line/getWeekLines',{params:{'appid':'1','type':num}})
          .then((res) => {
          this.lineCache[num] = res.body.data;
           console.log(this.lineCache);
           this.lineList = this.lineCache[num];
          }, (err) => {
          console.log(err)
          })
        },
        place(num){
            this.nowPlace = num;
             this.$http.get('/tp/Api/line/getCityList',{params:{'id':num}})
                    .then((res) => {


                  //window.location.reload();
                    }, (err) => {
                    console.log(err)
                    })
        }
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


