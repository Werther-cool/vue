<template>
<div class="sales-board">

  <h2>流量分析</h2>
  <div class="sales-board-line-right">
    <!-- <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></v-selection> -->
    <Vselection :selections="buyTypes" @on-change="onParamChange('buyType',$event)"></Vselection>
  </div>
  <div class="sales-board-line-right">
    <Vcounter @on-change="onParamChange('buyNum',$event)"></Vcounter>
  </div>
  <div class="sales-board-line-right">
    <Vchooser :selections="periodList" @on-change="onParamChange('period',$event)"></Vchooser>
  </div>

  <p>{{buyType.label}}</p>
  <p>{{buyNum}}</p>
  <p>{{period.label}}</p>
</div>
</template>

<script>
import Vselection from "../../components/base/selection"
import Vcounter from "../../components/base/counter"
import Vchooser from "../../components/base/chooser"
export default {
  components: {
    Vselection,
    Vcounter,
    Vchooser
  },
  methods: {
    onParamChange(attr, val) {
      this[attr] = val;
    }
  },
  data() {
    return {
      buyType: {},
      buyNum: 0,
      period: {},
      buyTypes: [{
          label: '入门版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        }
      ],
      periodList: [{
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}

.buy-dialog-btn {
  margin-top: 20px;
}

.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}

.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}

.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
