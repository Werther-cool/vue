<template lang="html">
  <div class="help">
    <div class="con clearfix">
      <div class="con-l">
          <ul clearfix>
            <li :class="{on:nowIndex==0}" @click="chooseIndex(0)"><img src="../assets/help1.png" alt="">服务帮助</li>
            <li :class="{on:nowIndex==1}" @click="chooseIndex(1)"><img src="../assets/help2.png" alt="">热门问题</li>
            <li :class="{on:nowIndex==2}" @click="chooseIndex(2)"><img src="../assets/help3.png" alt="">使用疑问</li>
            <li :class="{on:nowIndex==3}" @click="chooseIndex(3)"><img src="../assets/help4.png" alt="">功能介绍</li>
            <li :class="{on:nowIndex==4}" @click="chooseIndex(4)"><img src="../assets/help5.png" alt="">支付疑问</li>
          </ul>
      </div>
      <div class="con-c">
          <ul>
            <li v-for="(item,index) in Qlist" :class="{on:Qindex==index}" @click="chooseQindex(index)">{{item}}</li>
          </ul>
      </div>
      <div class="con-r">
          <ul>
            <li v-for="(item,index) in Alist"  v-if="index==Qindex">{{item}}</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowIndex: 0,
      Qindex: 0,
      Qlist: [
        "1.有问题如何快速联系客服？",
        "2.报名时候能否报一人以上?",
        "3.如何选择路线？",
        "4.报名填写信息两人以上时候，报名信息可否一致？",
        "5.单身定制路线能否同时报名2人以上？",
        "6.情侣路线是否可以报一个人或者单数？",
      ],
      Alist: [
        "1.有问题如何快速联系客服!",
        "2.报名时候能否报一人以上?",
        "3.如何选择路线!",
        "4.报名填写信息两人以上时候，报名信息可否一致!",
        "5.单身定制路线能否同时报名2人以上!",
        "6.情侣路线是否可以报一个人或者单数!",
      ]
    }
  },
  methods: {
    chooseIndex(val) {
      this.nowIndex = val;
    },
    chooseQindex(val) {
      this.Qindex = val;
    }
  }
}
</script>

<style scoped>
.help {
  margin-top: 90px;
  width: 100%;
  height: 680px;
  border-top: 1px solid #eee;
}

.con {
  width: 1200px;
  margin: 0 auto;
}

.con>div {
  margin-top: 80px;
  width: 400px;
  float: left;
  height: 404px;
  padding-top: 20px;
  box-sizing: border-box;
}

.con-l {
  border-right: 1px solid #ddd;
}

.con-l ul {
  margin-left: 78px;
}

.con-l li {
  float: left;
  width: 292px;
  height: 54px;
  line-height: 54px;

  text-indent: 50px;
  font-size: 22px;
  color: #666;
}

.con .on {
  background: #eee;
  color: #333;
}

.con-l li img {
  vertical-align: middle;
  margin-right: 14px;
}

.con-c {
  border-right: 1px solid #ddd;
}

.con-c ul {
  margin-left: 36px;
}

.con-c li {
  padding: 6px;
  font-size: 18px;
  color: #666;
  line-height: 24px;
  margin-bottom: 15px;
  width: 340px;
}

.con-r ul {
  margin-left: 36px;
  width: 375px;
  font-size: 18px;
  color: #666;
  line-height: 26px;
}
</style>
