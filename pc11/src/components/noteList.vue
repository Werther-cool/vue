<template lang="html">
    <div class="teamlist">
      <ul class="clearfix">
        <li class="clearfix" v-for="item in list">
          <div class="li-l">
            <img :src="item.litpic" alt="">
          </div>
          <div class="li-r">
            <h3 v-text="item.title">乘着铁游台湾（高雄、垦丁、花莲、九份）</h3>
            <p v-text="item.describe">DAY1【香港转机】【起始】最近对出国旅行尤其东南亚很狂热，主要是签证门槛低，好刷签证，相对也比较便宜，还有就是国人少，这次去台湾虽然不能算出国，但是也是我亚洲线路的必须要踩的一个...</p>
            <div class="li-ft">
              <span ><img :src="item.icon" alt=""></span>
              <span v-text="item.name">小天使</span>
              <span v-text="item.tiem">2017-10-01</span>
              <span class="like" v-text="item.like">120</span>
              <span class="comment" v-text="item.comment">46</span>
            </div>
          </div>
        </li>

      </ul>
    </div>


</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [{
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
.teamlist {
  width: 1200px;
  margin: 0 auto;
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

li {
  float: left;
  width: 744px;
  height: 195px;

  padding: 15px;
  box-sizing: border-box;
}

li:hover {
  background: #eee;
}

.li-l {
  float: left;
  width: 230px;
  height: 164px;
}

.li-r {
  float: right;
  width: 482px;
  height: 164px;
}

.li-r h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.li-r p {
  margin-top: 18px;
  font-size: 14px;
  color: #333;
  line-height: 24px;
  height: 66px;
  overflow: hidden;
}

.li-r .li-ft {
  margin-top: 30px;
  height: 30px;
  width: 482px;
}

.li-ft {
  vertical-align: baseline;
  height: 30px;
  line-height: 30px;
}

.li-ft span:first-child {
  display: inline-block;
  vertical-align: sub;
}

.li-ft .like {
  display: inline-block;
  margin-left: 20px;
  width: 40px;
  text-align: right;
  color: #999;
  background: url(../assets/team-r3-2.png) left center no-repeat;
}

.li-ft .comment {
  display: inline-block;
  margin-left: 20px;
  width: 40px;
  text-align: right;
  color: #999;

  background: url(../assets/team-r3-3.png) left center no-repeat;
}
</style>
