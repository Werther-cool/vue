<template>
   <!-- 菜单 -->
     <div class="menu" v-cloak>
         <ul class="clearfix">
             <li>
                 <a class="white" v-if="tagNum!=0" @click="tag('tagNum',0)" ><img src="../assets/images/home.png" >
                   <span>首页</span>
                 </a>
                 <a class="black" v-if="tagNum==0" href="/"><img src="../assets/images/home_on.png">
                   <span class="span_on">首页</span>
                 </a>
             </li>
             <li>
                 <a class="white"  v-if="tagNum!=1" @click="tag('tagNum',1)"><img src="../assets/images/detination_n.png" >
                     <span>目的地</span>
                 </a>
                 <a class="black" v-if="tagNum==1" href="/destination/index"><img src="../assets/images/destination_h.png">
                   <span class="span_on">目的地</span>
                 </a>
             </li>
             <li>
                 <a class="white"  v-if="tagNum!=2" @click="tag('tagNum',2)"><img src="../assets/images/find.png" >
                     <span>遇见</span>
                 </a>
                 <a class="black" v-if="tagNum==2" href="/notes/index"><img src="../assets/images/find_on.png">
                   <span class="span_on">遇见</span>
                 </a>
             </li>
             <li>
                <!-- <em class="redPoint" v-if="newMessage==1"></em> -->
                 <a class="white"  v-if="tagNum!=3" @click="tag('tagNum',3)"><img src="../assets/images/mine.png" >
                   <span>我的</span>
                 </a>
                 <a class="black" v-if="tagNum==3" href="/member"><img src="../assets/images/mine_on.png">
                   <span class="span_on">我的</span>
                 </a>
             </li>
         </ul>
     </div>


</template>

<script>
export default {
  name:"FootNav",
  data(){
      return{
          msg:123,
          tagNum:0
      }
  },
  methods:{
    tag:function (tagNum,val) {
            this[tagNum] = val;
        },
  }
}
</script>
<style>
@import url("../assets/css/common.css");
</style>

