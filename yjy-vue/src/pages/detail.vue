<template lang="html">
  <div id="detail" >
      <div class="detail_swiper">
        <div  v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <li class="swiper-slide" v-for="val in base.piclist" >
              <a href="#" class="detail_img">
                <img :src="val">
              </a>
            </li>
          </div>
        </div>
      </div>
        <div class="title">
          <h3>{{base.title}}</h3>
          <s>¥{{base.originalprice}}/人</s> <span class="title_price"><em>¥{{base.storeprice}}</em>/人</span> <span class="title_fr">预计参与{{changeBase.total_num}}人</span>
          <div class="title_leader">
             <img class="leader_img" :src="changeBase.leader_litpic" alt="">
             <span class="leader_icon"><img src="../assets/images/leader_icon.png" alt=""></span>
             <span class="leader_txt">{{changeBase.nickname}}</span>
             <a :href="'/leader/detail/'+changeBase.leaderId" class="detail_btn">查看领队</a>
          </div>
          <div class="detail_col">
              <p>活动时间：{{changeBase.lineday}}</p>
              <p>集合时间：{{changeBase.linedate}}</p>
              <p>集合地点：{{changeBase.meeting_point}}</p>
          </div>
        </div>

        <!--选择出发时间  -->
        <div class="choseTime" v-if="isExpired==0 ">
           <span class="icon_title"> <em><img src="../assets/images/chosetime_icon.png" alt=""></em> 选择出发时间</span>
           <!-- <a  @click="{showServer=1}" class="detail_btn">定制路线</a> -->
           <div v-swiper:mySwiper1="swiperOption1" class="swiper-container2">
           <div class="swiper-wrapper">
           <template v-if="linedate.length==1">
            <li class="1"  v-for="(item,index) in linedate" :class="{goCheckOn:init_n==index}">
                  <img  src="../assets/images/chose00h.png" alt=""> 
                  <span class="chose_week">{{item.linedate|weekday}}</span>
                  <p class="chose_day">{{item.linedate|filters_m}}月{{item.linedate|filters_d}}日</p>
                  <span class="chose_slogan">火热报名中</span>
            </li>
           </template>
           <template v-else>
            <li class="swiper-slide" v-for="(item,index) in linedate" @click="goCheck(index)" 
              :class="{goCheckOn:init_n==index}" >
                <template v-if="index==init_n">
                <img v-if="index==0" src="../assets/images/chose_01h.png" alt=""> 
                  <img v-if="0<index && index<(linedate.length-1)" src="../assets/images/chose_02h.png" alt=""> 
                  <img v-if="index==(linedate.length-1)" src="../assets/images/chose_03h.png" alt=""> 
                </template>
                <template v-else>
                <img v-if="index==0" src="../assets/images/chose_01.png" alt=""> 
                  <img v-if="0<index && index<(linedate.length-1)" src="../assets/images/chose_02.png" alt=""> 
                  <img v-if="index==(linedate.length-1)" src="../assets/images/chose_03.png" alt=""> 
                </template>
                  <span class="chose_week">{{item.linedate|weekday}}</span>
                  <p class="chose_day">{{item.linedate|filters_m}}月{{item.linedate|filters_d}}日</p>
                  <span class="chose_slogan">火热报名中</span>
              </li>
          </template> 

           </div>
          
         </div>
        </div> 

        <div class="companion">
            <span class="icon_title"> <em><img src="../assets/images/companion.png" alt=""></em>
            <i>结伴</i>({{info.line_num}}人成团)</span>
            <a :href="'/line/mate?lineid='+id+'&linedate='+nowLineTime" class="companion_fr">余席数 <i style="color: #ffae00;">{{info.male_inventory}}</i>/{{changeBase.total_num}} <em class="border_arrow"> </em> </a>      
            <div class="companion_imgs" >
                    <a  class="icon_bg" v-for="item in partners">
                    <template v-if="item.litpic">
                    <img  :src="item.litpic" alt="">
                    <span  v-show="item.num >1">{{item.num}}人</span>
                    </template>
                    <template v-else>
                    <img src="../assets/images/member_nopic.png">
                </template>
                </a>
            </div>
        </div> 

       <div class="contain">
            <div class="con_nav">
                <span @click="tab=0" :class="{on:tab==0}">活动详情</span>
                <span @click="tab=1" :class="{on:tab==1}">行程准备</span>
                <span @click="tab=2" :class="{on:tab==2}">费用说明</span>
                <span @click="tab=3" :class="{on:tab==3}">评价赞赏</span>
            </div>
            <li v-if="tab==0">
              <div v-html="base.reserved1" style="padding:0.2rem"></div>
            </li>
            <li v-if="tab==1">
              <div v-html="base.jieshao" style="padding:0.2rem"></div>
            </li>
            <li v-if="tab==2">
              <div v-html="base.feeinclude" style="padding:0.2rem"></div>
            </li>
            <div v-if="tab==3">
              <div class="appre_wind">
                <div class="appre_leader">
                  <img class="appre_img" :src="changeBase.leader_litpic" alt="">
                  <div class="appre_icon">
                    <span ><img src="../assets/images/leader_icon.png" alt=""></span> 
                    <p>{{changeBase.nickname}}</p>
                  </div>
                </div>
                <a class="appre_wind_btn" @click="show('appre_pop')">赞赏</a>
                <div class="reward_list">
                  <span class="reward_img" v-for="item in appreList"><img :src="item.litpic" alt=""></span>
                </div>
              </div>
              <div class="appre_pop" v-if="appre_pop==1" v-cloak @touchmove.prevent>
                  <div class="appre_con">
                      <p>赞赏作者</p>
                      <ul class="clearfix ">
                          <li @click="admir(3)">
                              <span>3¥</span>
                          </li>
                          <li @click="admir(5)">
                              <span>5¥</span>
                          </li>
                          <li  @click="admir(10)">
                              <span>10¥</span>
                          </li>
                          <li @click="admir(20)">
                              <span>20¥</span>
                          </li>
                      </ul>
                      <p class="appre_con_ft">*赞赏全额打入作者账户</p>
                      <span class="close_btn" @click="close('appre_pop')"><img src="../assets/images/close_btn.png" alt=""></span>
                  </div>

              </div>
              <div class="commentList clearfix">
                <p>全部评论({{comment.length}}条)</p>
                <li class="comment_li" v-for="(item,index) in comment">
                  <a  class="commentH"><img :src="item.litpic" alt=""></a>
                  <div class="li_fr">
                    <p>{{item.nickname}}</p>
                    <p class="time">{{item.addtime|weekday}}</p>
                    <p >{{item.content}}</p>
                  </div>
                </li>
                <p  v-if="moreShow == 0" class="last_p" @click="getMoreComment()">-加载更多评论-</p>
                <p  v-if="moreShow == 1" class="last_p">-没有更多评论了-</p>
              </div>
            </div>
        </div> 

            <div class="placeholeder">

            </div>
    
          <div class="new_menu"  v-cloak>
            <span class="menu_icon"><a href="/" class="detail_home"><img src="../assets/images/detail_home.png" alt="">首页</a></span>
            <span class="menu_icon" @click="like()">
              <img v-if="isLike==1" src="../assets/images/xh01_h.png" alt=""> 
              <img v-if="isLike==0" src="../assets/images/xh01.png" alt="">喜欢</span>
            <span class="menu_icon"  @click="getEdit()" ><img src="../assets/images/pj02.png" alt="">评价</span>
            <span class="menu_icon" @click="show('showCode')"><img src="../assets/images/jq02.png" alt="">进群</span>
            <a class="new_pay" v-if="isExpired!=1" :href="'/line/book?id='+id+'&linetype='+linetype+'&linedate='+nowLineTime">立即报名</a>
            <a class="new_pay" v-if="isExpired==1" style="background:#ccc;color:#fff">已过期</a>
          </div>
        <div class="edit" v-if="edit==1" v-cloak>
          <a class="common_back">
              <span class="com_back_btn" @click="close('edit')"></span>评论
             <span class="common_btn" @click="submit()">提交</span>
          </a>
          <textarea  placeholder="写下你的评论..." v-model="text"  v-focus="focusStatus" style="padding-top:0.2rem"></textarea>
        </div>
        <div class="black_overlay" v-if="showCode==1">
            <div class="qop_main">
                <span class="qr_close" @click="close('showCode')"><img src="../assets/images/qr_close.png" alt=""></span>
                <img :src="base.qrpic" alt="">
                <p class="yellow mt2 blod">长按二维码加入</p>
                <p class="qr_c">{{base.title}}</p>
                <p class="qr_b">不建议在群里进行转账或发红包,</p>
                <p class="qr_b">谨慎接受群友的好友添加请求,</p>
                <p class="qr_b">避免个人信息泄露及被骚扰。</p>
            </div>
        </div>
        <div class="black_overlay" v-if="showServer==1" @click="close('showServer')">
            <div class="qop_main">
                <img style="width:100%;height:auto;" src="../assets/images/service_img.png" alt="">
            </div>
        </div>
          <div class="warning" v-show="warning!=0">{{warning}}</div>
    </div>
</template>
<script>
import * as datefilter from '../util/datefilter'
export default {
  name:"Detail",
    data(){
           return {
              warning:0,
              info:{},
              changeBase:{},
              edit:0,
              isLike:0,
              rewardRecord:'',
              appre_pop:0,
              init_n:0,
              mySwiper:{},
              linedate:[],
              tab:0 ,
              line:[],
              price : {},
              base : {},
              partners : {},
              comment : {},
              linetype : 2,
              nowLineId:'',
              nowLineTime:'', //时间戳
              isLogin:0,
              isComment:0,
              text:'',
              focusStatus:0,
              appreList:[],  //赞赏列表
              moreShow:0,
              showCode:0,
              showServer:0,  //客服
              id:124,
              isExpired:0,   // 是否过期
              page:2,
              swiperOption:
                            {
                              autoplay: true,
                              direction : 'horizontal',
                            },
              swiperOption1:
                            {
                              autoplay: false,
                              direction : 'horizontal',
                              slidesPerView: 3.2,
                            },
           }
          },
            created: function() {
              // 获取id
              this.id = this.$route.query.id;
              
              // 获取基础信息
              this.$http.get('/tp/Api/Line/detail',{params:{'id':this.id,'linedateId':this.nowLineId}})
              .then((res) => {
                this.base =res.data.data;
                this.isLogin = res.data.isLogin;
                this.linedate = this.base.linedate;
                // 调用期数内容
                this.goCheck(0);
                }, (err) => {
                console.log(err)
                })

                //加载评论列表
               this.$http.get('/tp/api/Comment/getCommentList',{params:{'artid':this.id}})
                .then((res) => {
                this.comment =res.data.data;
                }, (err) => {
                console.log(err)
                })

                //加载赞赏列表
                this.$http.get('/tp/api/Comment/getRewardList',{params:{'lineId':this.id}})
                .then((res) => {
                  this.appreList =res.data.data;
                  }, (err) => {
                  console.log(err)
                  })

                  setTimeout(function () {
                    this.wxconfig();
                  },3000);

          },
            methods:{
                init: function () {
                  
         

                  setTimeout(function () {
                    this.wxconfig();
                  },3000);
                  
                },
                close:function (val) {
                  this[val] = 0;
                },
                show:function (val) {
                  this[val] = 1;
                },
                like:function () {
                  // this.judgeLogin();
                  this.isLike = !this.isLike;
                  this.$http.get('/tp/Api/line/lineLike',{params:{'linedateId':this.nowLineId,'lineId':this.id}})
                  .then((res) => {
                   
                    }, (err) => {
                    console.log(err)
                    })
               
                },
                getEdit:function () {
                  this.show('edit');
                  this.focusStatus = 1;
                },
                goCheck:function (index) {
                  this.init_n =index;
                  // if (index!=0) {
                  //   this.mySwiper.update();
                  // }
                  this.nowLineTime = this.linedate[index].linedate;
                  this.nowLineId = this.linedate[index].id;

                  this.$http.get('/tp/Api/line/linedates',
                  {params:{'lineid':this.id,linedate:this.linedate[index].linedate,linedateId:this.nowLineId}})
                  .then((res) => {
                          var res =res.data.data;
                          this.changeBase = res;
                          this.partners = res.partners;
                          this.isLike = res.isLike;
                          this.isComment = res.isComment;
                    }, (err) => {
                    console.log(err)
                    })
               
                },
            },
          filters:{
            weekday:datefilter.weekday,
            filters_m:datefilter.filters_m,
            filters_d:datefilter.filters_d,
            UTday:datefilter.UTday
        }
}
</script>
<style lang="css">

@import url("../assets/css/common.css");
@import url("../assets/css/note.css");
@import url("../assets/css/detail.css");


</style>

