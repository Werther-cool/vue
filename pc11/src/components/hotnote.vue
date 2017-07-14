<template lang="html">
  <div class="con-r-item">
    <img src="../assets/team-r3.png" alt="">
    <ul class="con-r-list clearfix">
      <li>
        <h4>美食定制：猝不及防吃吃</h4>
        <div class="li-ft">
            <span><img src="../assets/team-r3-1.png" alt=""></span>
            <span>小天使</span>
            <span>2017-10-01</span>
            <span class="like">120</span>
            <span class="comment">46</span>
        </div>
      </li>
      <li>
        <h4>美食定制：猝不及防吃吃</h4>
        <div class="li-ft">
            <span><img src="../assets/team-r3-1.png" alt=""></span>
            <span>小天使</span>
            <span>2017-10-01</span>
            <span class="like">120</span>
            <span class="comment">46</span>
        </div>
      </li>
      <li>
        <h4>美食定制：猝不及防吃吃</h4>
        <div class="li-ft">
            <span><img src="../assets/team-r3-1.png" alt=""></span>
            <span>小天使</span>
            <span>2017-10-01</span>
            <span class="like">120</span>
            <span class="comment">46</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.con-r-item {
  margin-top: 48px;
}

.con-r-list li {
  box-sizing: border-box;
  padding: 5px;
  width: 435px;
  height: 78px;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
}


.con-r-list h4 {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.con-r-list .li-ft {
  vertical-align: baseline;
  height: 30px;
  line-height: 30px;
}

.con-r-list .li-ft span:first-child {
  display: inline-block;
  vertical-align: sub;
}

.con-r-list .li-ft .like {
  display: inline-block;
  margin-left: 20px;
  width: 40px;
  text-align: right;
  color: #999;
  background: url(../assets/team-r3-2.png) left center no-repeat;
}

.con-r-list .li-ft .comment {
  display: inline-block;
  margin-left: 20px;
  width: 40px;
  text-align: right;
  color: #999;

  background: url(../assets/team-r3-3.png) left center no-repeat;
}
</style>
