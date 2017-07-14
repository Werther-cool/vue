<template lang="html">
  <div class="team">
    <div class="banner"></div>
    <div class="con clearfix">
      <div class="con-l">
        <h2><span></span>关于1+1团队特色定制</h2>
        <div class="item">
          <h3>1.互动活动量身策划</h3>
          <p>我们有专门的活动策划人员，可根据企业要求，量身策划互动游戏，让员工通过游戏互动，增进凝聚力，提高团队协作精神，在愉悦的氛围中更好的了解团队成员的特性。</p>
          <img src="../assets/team-1pic.png" alt="">
        </div>
        <div class="item">
          <h3>2.个性化专属定制</h3>
          <p>1+1的所有旅游路线，均可根据企业的要求选择适合的出行日期，也可根据企业的要求调整餐饮、住宿标准，全程打造最适合企业的团队出游。</p>
          <img src="../assets/team-2pic.png" alt="">
        </div>
        <div class="item">
          <h3>3.高能力领队安排</h3>
          <p>我们有专门的活动策划人员，可根据企业要求，量身策划互动游戏，让员工通过游戏互动，增进凝聚力，提高团队协作精神，在愉悦的氛围中更好的了解团队成员个人特性。</p>
          <img src="../assets/team-3pic.png" alt="">
        </div>
        <div class="item">
          <h3>4.全程无购物点</h3>
          <p>1+1特色定制旅游，全程无购物点设置，完全根据企业要求，量身定制旅游线路，策划互动游戏。让企业员工切实的享受旅游的美景与美食，不包含隐形消费。</p>
          <img src="../assets/team-4pic.png" alt="">
          <img src="../assets/team-5pic.png" alt="">
        </div>
      </div>
      <div class="con-r">
        <div class="con-r-item con-r-item2">
          <img src="../assets/team-r1.png" alt="">
          <div class="graphic clearfix">
            <p class="gra-l"><img src="../assets/team-r1-1.png" alt=""></p>
            <div class="gra-r">
              <h4>Sherry</h4>
              <p>毕业于暨南大学旅游管理专业。曾先后在广东中国旅行社、中国国旅（广东）国际旅行社担任销售主管、店长、计调等工作，获得过很多优秀证书，行业经验非常丰富。</p>
            </div>
          </div>
        </div>
        <div class="con-r-item">
          <img src="../assets/team-r2.png" alt="">
          <div class="graphic clearfix">
            <p class="gra-l"><img src="../assets/team-r2-1.png" alt="">
              <span class="gra-l-span">特色团队策划</span>
            </p>
            <div class="gra-r2 gra-r">
              <h4>挚友咨询团建策划师</h4>
              <p>特色团队策划</p>
              <p>微信客服：A13802508604</p>
              <p>业务洽谈：13710454316</p>
            </div>
          </div>
        </div>
        <hotnote></hotnote>
      </div>
    </div>
    <div class="note">
      <div class="note-con">
        <div class="note-con-l">
          <h2><span></span>团队定制游记回顾</h2>
          <div class="btn-pos">
            <a  class="btn_l"></a>
            <a class="btn_r"></a>
          </div>
        </div>
      </div>
        <noteList :list="noteList"></noteList>
    </div>

  </div>
</template>

<script>
import noteList from "../components/noteList"
import hotnote from "../components/hotnote"
export default {
  components: {
    noteList,
    hotnote
  },
  data() {
    return {
      noteList: [{
          title: "乘着铁游台湾（高雄、垦丁、花莲、九份）",
          litpic: require("../assets/team-img.png"),
          describe: "DAY1【香港转机】【起始】最近对出国旅行尤其东南亚很狂热，主要是签证门槛低，好刷签证，相对也比较便宜，还有就是国人少，这次去台湾虽然不能算出国，但是也是我亚洲线路的必须要踩的一个...",
          icon: require("../assets/team-r3-1.png"),
          name: "小天使",
          time: "2017-10-01",
          like: 12,
          comment: 40
        },
        {
          title: "乘着铁游台湾（高雄、垦丁、花莲、九份）",
          litpic: require("../assets/team-img.png"),
          describe: "DAY1【香港转机】【起始】最近对出国旅行尤其东南亚很狂热，主要是签证门槛低，好刷签证，相对也比较便宜，还有就是国人少，这次去台湾虽然不能算出国，但是也是我亚洲线路的必须要踩的一个...",
          icon: require("../assets/team-r3-1.png"),
          name: "小天使",
          time: "2017-10-01",
          like: 12,
          comment: 40
        },
        {
          title: "乘着铁游台湾（高雄、垦丁、花莲、九份）",
          litpic: require("../assets/team-img.png"),
          describe: "DAY1【香港转机】【起始】最近对出国旅行尤其东南亚很狂热，主要是签证门槛低，好刷签证，相对也比较便宜，还有就是国人少，这次去台湾虽然不能算出国，但是也是我亚洲线路的必须要踩的一个...",
          icon: require("../assets/team-r3-1.png"),
          name: "小天使",
          time: "2017-10-01",
          like: 12,
          comment: 40
        }
      ]
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 590px;
  background: url(../assets/team-banner.png);
}

.con {
  width: 1200px;
  margin: 0 auto;
}

.con-l {
  float: left;
  width: 717px;
}

h2 {
  height: 30px;
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 28px;
}

h2 span {
  margin-top: 5px;
  width: 6px;
  height: 20px;
  display: inline-block;
  background: #ff5d8b;
  margin-right: 10px;
}

.item {
  margin-bottom: 28px;
}

.item h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 21px;
}

.item p {
  font-size: 14px;
  line-height: 20px;
  color: #333;
  margin-bottom: 14px;
}

.con-r {
  float: right;
  width: 435px;
}

.con-r-item {
  margin-top: 28px;
}

.graphic {
  /*height: 281px;*/
  padding-top: 20px;
}

.gra-l {
  float: left;
  position: relative;
}

.gra-r {
  width: 214px;
  float: right;
  /*height: 281px;*/
}

.gra-l-span {
  position: absolute;
  left: 0;
  bottom: -20px;
  width: 150px;
  text-align: center;
  font-size: 14px;
}

.gra-r2 {
  padding-top: 20px;
  float: left;
  height: 160px;
  text-indent: 20px;
}

.gra-r2 p {
  font-size: 16px;
}

.gra-r h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.gra-r p {
  width: 214px;
  line-height: 20px;
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

.note {
  width: 100%;
  height: 715px;
  background: #f8f8f8;
}

.note-con {
  width: 1200px;
  height: 58px;
  margin: 0 auto;
}

.note-con-l {
  float: left;
  width: 717px;
  position: relative;
}

.btn-pos {
  position: absolute;
  right: 0;
  top: 0;
  width: 104px;
  height: 50px;
  padding-top: 30px;
  padding-left: 20px;
}

.btn_l {
  width: 23px;
  height: 23px;
  display: inline-block;
  background: url('../assets/btn-l-n.png');
  margin-right: 20px;
}

.btn_l:active {
  background: url('../assets/btn-l-h.png');
}

.btn_r {
  width: 23px;
  height: 23px;
  display: inline-block;
  background: url('../assets/btn-r-n.png')
}

.btn_r:active {
  background: url('../assets/btn-r-h.png')
}
</style>
