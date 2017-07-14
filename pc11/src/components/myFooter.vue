<template lang="html">
  <div class="myFooter">
  <div class="foot clearfix">
    <div class="foot_l">
        <ul class="clearfix">
          <li>首页&emsp;|</li>
          <li>1+1动态&emsp;|</li>
          <li>关于我们&emsp;|</li>
          <li>联系我们&emsp;|</li>
          <li>服务与帮助</li>
        </ul>
        <p>客服座机:020-82516031(服务时间: 周一至五 9:00-18:00)</p>
        <p>客服热线:13802508604或13802508704</p>
        <p>客服邮箱:258985730@qq.com</p>
        <p class="copyright">版权所有©广东广东十一维空间旅行社股份有限公司 | 1+1旅游 |</p>
    </div>
    <div class="foot_r">
      <span><img src="../assets/fdibu.png" alt=""></span>
      <p>1+1旅游公众号</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.myFooter {
  width: 100%;
  height: 283px;
  background: #28292b;
  font-family: "微软雅黑"
}

.foot {
  width: 1200px;
  margin: 0 auto;
}

.foot_l {
  box-sizing: border-box;
  margin-top: 70px;
  float: left;
  width: 600px;
  height: 165px;

  padding-left: 60px;
  box-sizing: border-box;
  border-right: 1px solid #787878
}

.foot_l ul {
  margin-bottom: 20px;
}

.foot_l li {
  float: left;
  font-size: 20px;
  color: #a3a3a3;
  text-indent: 10px;
}

.foot_l p {
  text-indent: 10px;
  color: #a3a3a3;
  font-weight: 200;
  font-size: 16px;
  margin-top: 10px;
}

.foot_l .copyright {
  margin-top: 30px;
  font-size: 16px;
  color: #a3a3a3;
}

.foot_r {
  float: left;
  margin-top: 70px;
  margin-left: 45px;
}

.foot_r p {
  font-size: 20px;
  color: #a3a3a3;
  text-align: center;
  margin-top: 10px;
}
</style>
