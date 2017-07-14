<template lang="html">
  <div class="note">
    <div class="banner"></div>
    <div class="con clearfix">
      <div class="con-l">
        <div class="bar">
          <span class="bar-btn" :class="{btnOn:barVal==0}" @click="changeBar(0)">最新热门</span>
          <span class="bar-btn" :class="{btnOn:barVal==1}" @click="changeBar(1)">热门游记</span>
          <div class="bar-calendar">
            <a  class="type-a">全部类型
              <ul class="ul-a clearfix">
                <li @click="selectT(0)" :class="{on:nowType == 0}">单身定制</li>
                <li @click="selectT(1)" :class="{on:nowType == 1}">美食交友</li>
                <li @click="selectT(2)" :class="{on:nowType == 2}">情侣定制</li>
                <li @click="selectT(3)" :class="{on:nowType == 3}">团队定制</li>
              </ul>
            </a>
            <div  class="type-a type-a2">2017年07月
              <div class="type-data">
                <p class="type-title">2017年</p>
                <div class="data-con clearfix">
                  <span v-for="(item,index) in monthList " @click="selectM(index)" :class="{on:nowIndex == index}">{{item}}</span>
                </div>

              </div>
            </div>

          </div>
        </div>
          <noteList :list="noteList"></noteList>
      </div>
      <div class="con-r">
        <lineList></lineList>
        <hotnote></hotnote>
      </div>
    </div>
    <div class="page">
      <pagination :page-no="pageNo" :current="currentPage" @changePage="changePage( $event)"></pagination>
    </div>
  </div>
</template>

<script>
import noteList from '../components/noteList'
import hotnote from '../components/hotnote'
import line from '../components/line'
import pagination from '../components/pagination'
export default {
  components: {
    noteList,
    hotnote,
    lineList: line,
    pagination
  },
  data() {
    return {
      currentPage: 1,
      barVal: 0,
      nowIndex: 1,
      nowType: 0,
      monthList: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
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
      ],
      pageNo: 10
    }
  },
  methods: {
    changeBar(val) {
      this.barVal = val;
    },
    selectM(index) {
      this.nowIndex = index;
    },
    selectT(val) {
      this.nowType = val;
    },
    requestData() {
      // 在这里使用ajax或者fetch将对应页传过去获取数据即可
    },
    changePage(val) {
      console.log(val);
    }
  },
  watch: {
    currentPage: 'requestData'
  },

}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 590px;
  background: url(../assets/note-banner.png);
}

.con {
  width: 1200px;
  margin: 0 auto;
}

.bar {
  height: 65px;
  width: 745px;

  padding-top: 20px;
}

.bar-btn {
  float: left;
  width: 108px;
  height: 35px;
  text-align: center;
  line-height: 30px;
  color: #333;
  font-size: 16px;
}

.bar .btnOn {
  color: #fff;
  background: url(../assets/bar-btn-on.png)
}

.bar-calendar {
  float: left;
  width: 317px;
  height: 33px;
  margin-left: 30px;
}

.bar-calendar:hover .ul-a,
.bar-calendar:hover .type-data {
  display: block;
}

.con-l {
  float: left;
  width: 745px;
}

.con-r {
  float: right;
  width: 435px;
}

.type-a {
  float: left;
  width: 153px;
  height: 33px;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 2px;
  background: url(../assets/arrow-d.png) no-repeat 80% center;
  text-align: center;
  line-height: 33px;
  text-indent: -10px;
  position: relative;
}

.bar-calendar .type-a2 {
  width: 160px;
  border-left: none;
}

.ul-a {
  position: absolute;
  left: 0;
  top: 33px;
  width: 153px;
  display: none;
}

.ul-a li {
  z-index: 99;
  float: left;
  width: 153px;
  height: 33px;
  border: 1px solid #ddd;
  border-top: none;
  background: #fff;
}

.type-title {
  text-indent: 5px;
  width: 160px;
  height: 33px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  background: url(../assets/arrow-l.png) no-repeat 10% center, url(../assets/arrow-r.png) no-repeat 90% center;
}

.ul-a li:hover {
  background: #ffdae5;
}

.type-title:hover {
  background: #ffdae5 url(../assets/arrow-l.png) no-repeat 10% center, url(../assets/arrow-r.png) no-repeat 90% center;
}

.type-data {
  display: none;
  position: absolute;
  left: 0;
  top: 33px;
  z-index: 99;
  width: 160px;
  height: 133px;
  background: #fff;
  border-left: 1px solid #ddd;
}

.data-con {
  height: 99px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.ul-a .on {
  background: #ffdae5;
}

.data-con .on {
  color: #fff;
  background: #ff5d8b;
}

.type-data span {
  overflow: hidden;
  display: inline-block;
  float: left;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-left: 5px;
  text-align: center;
  line-height: 33px;
  font-size: 12px;
  text-indent: 2px;
}

.con-r-item {
  margin-top: 30px;
}

.con-r-item h2 {
  font-size: 16px;
}

.page {
  margin-top: 40px;
  height: 60px;
}
</style>
