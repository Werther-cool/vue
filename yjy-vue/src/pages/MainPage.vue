<template>
  <div id="index">
      <div class="index_hd" v-cloak>

          <span :class="{on:nowPlace==77}" @click="place(77)">佛山</span>
          <em>|</em>
          <span :class="{on:nowPlace==75}" @click="place(75)">广州</span>
          <!-- <em>|</em>
          <span :class="{on:nowPlace==76}" @click="place(76)">深圳</span> -->

      </div>
      <div class="index_banner" v-cloak>
          <!-- <div  v-swiper:mySwiper="swiperOption">
             <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="item in banner">
                  <a :href="item.adlink"><img :src="item.adsrc" ></a>
                </li>
              </ul>
            </div> -->
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
      <div class="limit"  v-cloak v-if="nowPlace==75 && ticket!=0">
        <div class="limit_t" v-cloak> 倒计时 <span>{{timeLimit}}</span></div>
        <div class="limit_title" v-cloak>
          {{limit.sellpoint}}
        </div>
        <a :href="'/line/detail/'+limit.id"><img class="limit_img" v-cloak src="../assets/images/index_countdown.gif" alt=""></a>
        <a v-if="ticket==4"   :href="'/line/detail/'+limit.id" class="ticket_bg"><img v-cloak src="../assets/images/ticket_spos.png" alt=""></a>
        <a v-if="ticket==2" :href="'/line/detail/'+limit.id" class="ticket_bg"><img v-cloak src="../assets/images/ticket_hot.png" alt=""></a>
        <a v-if="ticket==3"  :href="'/line/detail/'+limit.id" class="ticket_bg"><img v-cloak src="../assets/images/ticket_air.png" alt=""></a>
    </div>
      <!-- 本周活动 -->
      <div class="pair_nav" v-cloak v-if="nowPlace==75">
        <div class="pair_nav_hd clearfix">
          <ul class="clearfix">
            <li :class="{nav_on: navNum==0}" @click="nav(0)"><a>本周活动</a></li>
            <li :class="{'nav_on': navNum==1}" @click="nav(1)"><a>下周活动</a> </li>
            <li :class="{'nav_on': navNum==2}" @click="nav(2)"><a>纪念月活动</a> </li>
          </ul>
        </div>
          <div class="tag_container" v-cloak>
            <div class="swiper-container swiper-container1">
               <div class="swiper-wrapper">
                  <li  class="swiper-slide"  v-for="item in lineList">
                    <a class="tag_slide" :href="'/line/detail/' + item.id"><img src="../assets/images/placehold2.jpg" :data-src="item.litpic"></a>
                    <span class="swiper-icon" v-if="item.linetype == 0"><img src="../assets/images/dsjy.png" alt=""></span>
                    <span class="swiper-icon" v-if="item.linetype == 1"><img src="../assets/images/msjy.png" alt=""></span>
                    <span class="swiper-icon" v-if="item.linetype == 2"><img src="../assets/images/xxdj.png" alt=""></span>
                    <span class="swiper-icon" v-if="item.linetype == 3"><img src="../assets/images/tddz.png" alt=""></span>
                    <h4>{{item.sellpoint|sub}}</h4>
                    <p class="swiperP">
                      <span>{{item.linedate |goDay}}</span>
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
                 <a :href="'/line/detail/' + item.id" class="holiday_img"><img src="../assets/images/placehold.jpg" :data-src="item.litpic"></a>
                  <p class="holiday_li_title" v-text="item.title">清远桃花湖一日游长标题清远桃花湖一日游长标题width</p>
                  <span class="deepRed">¥<i v-text="item.storeprice">1800</i>/人</span>
                  <span  class="swiper-status"><img src="../assets/images/sign.png" alt=""></span>
                    <span v-if="item.status==1" class="swiper-status"><img src="../assets/images/signfull.png" alt=""></span>
                    <span v-if="item.status==2" class="swiper-status"><img src="../assets/images/hastravel.png" alt=""></span>
               </li>
             </ul>
       </div>
       <!-- 团队start -->
       <div class="team_custom" v-cloak v-if="nowPlace==75">
         <div class="team_title">
           <h2><img src="../assets/images/index_t2.png" alt=""></h2>
           <p>-- 我的团队我做主 --</p>
         </div>
         <a href="/line/team" class="team_banner_img"><img src="../assets/images/placehold.jpg" data-src="../assets/images/team_banner.png" alt=""></a>
         <ul class="team_ul clearfix">
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/placehold2.jpg"   data-src="../assets/images/team_nav1.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/placehold2.jpg"   data-src="../assets/images/team_nav2.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/placehold2.jpg"   data-src="../assets/images/team_nav3.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/placehold2.jpg"   data-src="../assets/images/team_nav4.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/placehold2.jpg"   data-src="../assets/images/team_nav5.png" alt=""></a></li>
           <li><a href="/line/team" class="team_nav_img"><img src="../assets/images/placehold2.jpg"   data-src="../assets/images/team_nav6.png" alt=""></a></li>
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
            <img src="../assets/images/placehold.jpg" :data-src="item.covpic" alt="">
             <span>0{{index+1}}</span>
             <div class="hot_mask">
                <p>{{item.title}}</p>
             </div>
           </a>
         </div>
       </div>
       <!-- 爆款路线 hotline end -->

       <!--  随便逛逛 start -->
       <div class="stroll"  v-cloak v-scroll="getMore">
         <div class="hotline_title">
           <h2>历史回顾</h2>
           <p>-- 为你优选 --</p>
         </div>
         <div class="stroll_list clearfix" v-for="item in strollList" >
           <div class="stroll-l">
             <a :href="'/line/detail/' + item.id +'?linedateId='+item.linedateId"  class="stroll_img"><img src="../assets/images/placehold.jpg" :data-src="item.litpic" alt=""></a>
           </div>
           <a :href="'/line/detail/' + item.id +'?linedateId='+item.linedateId" class="stroll-r">
              <h3>{{item.title}}</h3>
              <p class="stroll_time">出发时间 : {{item.linedate | todate}} ({{item.linedate | goDay}})</p>
              <p>领队 {{item.nickname}}</p>
              <!-- <span class="sign-icon" v-if="item.status == 0"><img src="../assets/images/sign.png" alt=""></span>
              <span class="sign-icon" v-if="item.status == 1"><img src="../assets/images/signfull.png" alt=""></span>
              <span class="sign-icon" v-if="item.status==2" ><img src="../assets/images/hastravel.png" alt=""></span> -->

           </a>
         </div>
       </div>
       <!-- 随便逛逛 end -->


       <div class="placeholder" v-cloak>
          <!-- <a class="list_more" v-show="showLoad" v-cloak> <img src="/public/new/images/Spinner.gif"></a> -->
         <p class="ft_p" v-show="!showLoad">---我也是有底线的---</p>
       </div>
   
    </div>
</template>

<script>

export default {
  name:'MainPage',
  data(){
      return{
        thisWeek:[],
          hotlist:[],
          navNum:0,
          tagNum:0,
          show:0,
          nextWeek:[],
          mySwiper:{},
          banner:[
                  {"adsrc":"/src/assets/images/pair_g2.png"},
                  {"adsrc":"/src/assets/images/pair_g4.png"},
                  {"adsrc":"/src/assets/images/pair_g2.png"},
                  {"adsrc":"/src/assets/images/pair_g4.png"}
              ],
          holiday:[],
          loading: '../assets/images/mine_on.png',
          showLoad:0,
          timeLimit:'0天 00:00:00',
          nationalDayLine:[],
          nowPlace:0,
          ticket:0,
          limit:{},
          city:[],
          time:'123456',
          strollList:[],
          page:0,
          moreFlag:1,
          newMessage:0,
          swiperOption:{
              notNextTick: true,
              // swiper configs 所有的配置同swiper官方api配置
              autoplay: {delay:3000},
              direction : 'horizontal',
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              paginationClickable :true,
              mousewheelControl : true,
              observeParents:true,
              // if you need use plugins in the swiper, you can config in here like this
              // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
              debugger: true,
          }
      }
  },
        mounted: function() {
            var _this = this;
            this.$nextTick(function() {
              _this.init();

              })
          },
           updated:function () {
           },
           computed:{
             lineList(){
               if(this.navNum == 0){
                 return this.thisWeek;
               }else if(this.navNum==1){
                return this.nextWeek;
               }else if(this.navNum==2){
                 return this.nationalDayLine;
               }
             }
           },
          methods: {
            init: function() {
                var result={};
                // this.banner   = result.banner;
                this.thisWeek = result.thisWeek;
                this.nextWeek = result.nextWeek;
                this.holiday = result.holiday;
                this.hotlist = result.hotline;
                this.nationalDayLine = result.nationalDayLine;
                this.time = result.time;
                this.nowPlace = result.now_city;
         
              this.initAjax();
           
            },
            initAjax:function () {
          
            // this.$http.get('/mock/banner.json')
            //   .then((res) => {
            //     console.log(res);
            //     this.banner = res.body
            //   }, (err) => {
            //     console.log(err)
            //   })

            },
            tag:function (tagNum,val) {
              this[tagNum] = val;
            },
            nav:function (navNum) {
              this.navNum =navNum;
              this.mySwiper.update({
               updateTranslate:true
             });
            },
            /* 切换地点 */
            place:function (val) {
              this.nowPlace = val;
              // ajax({
              //     url:"/index/changeCity",
              //     type:"post",
              //     data:{id:this.nowPlace},
              //     success:function (res) {
              //       if (res==1) {
              //           window.location.reload();
              //       }

              //     }
              // })
            },
            getMore:function () {
              if (this.moreFlag==1) {
                   this.showLoad=1;
        /*       ajax({
                  url:"/index/fourth/",
                  type:"post",
                  data:{'page':this.page},
                  success:function (res) {
                    var res = eval('(' + res + ')');
                   //  判断是否显示loading
                    if (res.strollList.length==0) {
                      this.moreFlag=0;
                    }
                   //  第一次加载显示赋值,第二次加载拼接
                    if (this.page==0) {
                      this.strollList=res.strollList;
                    }else {
                      this.strollList = this.strollList.concat(res.strollList);
                    }
                     this.showLoad = 0;
                     this.page = res.page;
                  }
                }) */
              }else {
                return;
              }

            },
            limitInit:function () {
  /*               ajax({
                  url:"/index/limitBuy",
                  type:"get",
                  data:{"isNew":0},
                  success:function (res) {
                    var res = eval('('+res+')');
                      console.log(res.limitBuy);
                    if (res.limitBuy) {
                      this.limit = res.limitBuy[0];
                      this.ticket= res.limitBuy[0].good_type;
                      this.countdowm(res.limitBuy[0].linedate);
                    }

                  }

                }) */

            },
            /* 倒计时 */
            countdowm:function(timestamp) {

              var self = this;

              var timer = setInterval(function () {
                  var nowTime = new Date();
                  var endTime = new Date(timestamp * 1000);
                  var t = endTime.getTime() - nowTime.getTime();
                  if (t > 0) {
                      var day = Math.floor(t / 86400000);
                      var hour = Math.floor((t / 3600000) % 24);
                      var min = Math.floor((t / 60000) % 60);
                      var sec = Math.floor((t / 1000) % 60);
                      hour = hour < 10 ? "0" + hour : hour;
                      min = min < 10 ? "0" + min : min;
                      sec = sec < 10 ? "0" + sec : sec;
                      var format = '';
                      format = `${day}天 ${hour}:${min}:${sec}`;
                      self.timeLimit = format;
                  }
              }, 1000);
            }

          },
          filters: {
              goDay: function (date) {
                var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
                var d = new Date(date*1000).getDay();
                 return weekDay[d];
              },
              //时间戳转换为 月 日
              todate: function (message) {
                    var dformat = '';
                    if (message) {
                        var d = new Date(parseInt(message) * 1000);
                        dformat =(d.getMonth() + 1) + '月' + d.getDate() + '日';
                    }
                    return dformat;
                },
                sub:function (mes) {
                  if(mes.length>7){
                    return mes.slice(0,7)
                  }else{
                    return mes
                  }
                }
          },
          directives: {// 自定义指令
           scroll: {
             bind: function (el,binding){
              window.addEventListener('scroll', throttle (function () {

                if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
                 var fnc = binding.value;
                 fnc();
                }
              },400)
            );
               function throttle(fn, delay) {
                  var timer = null;
                  return function () {
                      clearTimeout(timer);
                      timer = setTimeout(fn, delay)
                  }
               }
              }
            }
          }

}
</script>

<style lang="css" >
/* @import url("../assets/css/swiper.min"); */
 @import url("../assets/css/device");
@import url("../assets/css/common.css");
@import url("../assets/css/index2.css"); 


</style>


