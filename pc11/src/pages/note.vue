<template lang="html">
  <div class="note">
    <div class="banner"></div>
    <div class="con clearfix">
      <div class="con-l">
        <div class="bar">
          <span class="bar-btn" :class="{btnOn:barVal==0}" @click="changeBar(0)">最新热门</span>
          <span class="bar-btn" :class="{btnOn:barVal==1}" @click="changeBar(1)">热门游记</span>
          <div class="bar-calendar">

          </div>
        </div>
          <noteList :list="noteList"></noteList>
      </div>
      <div class="con-r">

      </div>
    </div>
  </div>
</template>

<script>
import noteList from "../components/noteList"

export default {
  components: {
    noteList
  },
  data() {
    return {
      barVal: 0,
      noteList: [{
          title: "乘着铁游台湾（高雄、垦丁、花莲、九份）",
          litpic: require("../assets/team-img.png"),
          describe: "DAY1【香港转机】【起始】最近对出国旅行尤其东南亚很狂热，主要是签证门槛低，好刷签证，相对也比较便宜，还有就是国人少，这次去台湾虽然不能算出国，但是也是我亚洲线路的必须要踩的一个...",
          icon: require("../assets/team-r3-1.png"),
          name: "小天使",
          time: "2017-10-01",
          like: 12,
          comment: 110
        },
        {
          title: "乘着铁游台湾（高雄、垦丁、花莲、九份）",
          litpic: require("../assets/team-img.png"),
          describe: "DAY1【香港转机】【起始】最近对出国旅行尤其东南亚很狂热，主要是签证门槛低，好刷签证，相对也比较便宜，还有就是国人少，这次去台湾虽然不能算出国，但是也是我亚洲线路的必须要踩的一个...",
          icon: require("../assets/team-r3-1.png"),
          name: "小天使",
          time: "2017-10-01",
          like: 120,
          comment: 402
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
  },
  methods: {
    changeBar(val) {
      this.barVal = val;
    }

  }

}
</script>

<style lang="css">
.banner {
  width: 100%;
  height: 590px;
  background: url(../assets/note-banner.png);
}
.con {
  width: 1200px;
  margin: 0 auto;
}
.bar{
  height: 65px;
  width: 745px;
  background: green;
  padding-top: 20px;
}
.bar-btn{
  float: left;
  width: 108px;
  height: 35px;
  text-align: center;
  line-height: 30px;
  color:#333;
  font-size: 16px;
}
.bar .btnOn{
  color:#fff;
  background: url(../assets/bar-btn-on.png)
}
.bar-calendar{
  float: left;
  width: 310px;
  height: 33px;
  /*margin-left: 10px;*/
  background: red;

}
.con-l {
  float: left;
  width: 745px;
}
.con-r {
  float: right;
  width: 435px;
}

</style>
