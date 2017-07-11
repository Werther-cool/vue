<template lang="html">
  <div class="myHeader">
      <div class="head">
        <h1><img src="../assets/logo.png" alt=""></h1>
        <ul class="clearfix head-ul">
          <!-- <li :class="{on:nav==0}" @click="changeNav(0)"><a href="javascript:;" >首页</a></li>
          <li :class="{on:nav==1}" @click="changeNav(1)"><a href="javascript:;">团队定制</a></li>
          <li :class="{on:nav==2}" @click="changeNav(2)"><a href="javascript:;">游记回顾</a></li>
          <li :class="{on:nav==3}" @click="changeNav(3)"><a href="javascript:;">关于我们</a></li>
          <li :class="{on:nav==4}" @click="changeNav(4)"><a href="javascript:;">服务与帮助</a></li> -->

          <router-link :to="{ name: 'IndexPage', params: {}}" tag="li"   ><a href="javascript:;" >首页</a></router-link>
          <router-link :to="{ name: 'Team', params: {}}" tag="li" ><a href="javascript:;">团队定制</a></router-link>
          <router-link :to="{ name: 'Note', params: {}}" tag="li" ><a href="javascript:;">游记回顾</a></router-link>
          <router-link :to="{ name: 'About', params: {}}" tag="li" ><a href="javascript:;">关于我们</a></router-link>
          <router-link :to="{ name: 'Help', params: {}}" tag="li" ><a href="javascript:;">服务与帮助</a></router-link>
        </ul>
      </div>
  </div>
</template>

<script>
import IndexPage from '@/components/container'
import Team from '@/pages/team'
import Help from '@/pages/help'
import About from '@/pages/about'
import Note from '@/pages/note'
export default {
  data() {
    return {
      nav: 0
    }
  },
  methods: {
    changeNav(nav) {
      this.nav = nav;
      console.log(this.nav);
    }
  }
}
</script>

<style scoped>
.myHeader {
  width: 100%;
  height: 90px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 200
}

.head {
  width: 1200px;
  height: 90px;
  margin: 0 auto;
  overflow: hidden;
}

.head h1 {
  width: 237px;
  height: 75px;
  float: left;
}

.head-ul {
  float: left;
}

.head-ul li {
  color: #333;
  font-size: 20px;
  float: left;
  height: 87px;
  line-height: 90px;
  margin-right: 60px;
  text-align: center;
  position: relative;
}




/*选中添加下划线*/


/*.head-ul .router-link-active:after {
  left: 0%;
  width: 80px;
}

.head-ul .router-link-active:last-child:after {
  left: 0%;
  width: 100px;
}*/

.router-link-active a {
  color: #ff5d8b;
}

.head-ul li:after {
  content: "";
  width: 0;
  height: 3px;
  background: #ff5d8b;
  position: absolute;
  top: 100%;
  left: 50%;
  transition: all .5s;
}

.head-ul li:hover:after {
  left: 0%;
  width: 80px;
}

.head-ul li:hover a {
  color: #ff5d8b;
}

.head-ul li:last-child:hover:after {
  left: 0%;
  width: 100px;
}

.head-ul li:first-child {
  width: 78px;
}
</style>
