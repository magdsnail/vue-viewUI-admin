<template>
  <div class="home">
    <div class="home-at">
      <div class="home-at-agen">
        <span class="des">代办事项</span>
        <div class="home-at-agen-conent">
          <p>
            有新的待审核订单
            <span>立即处理</span>
          </p>
          <p>
            有新的退款申请订单
            <span>立即处理</span>
          </p>
          <p>
            有医护人员报警
            <span>立即处理</span>
          </p>
        </div>
      </div>
      <div class="home-at-today">
        <span class="des">今日数据</span>
        <div class="home-at-today-conent">
          <div class="home-at-today-conent-child">
            <p class="child-nums">2个</p>
            <p class="child-type">服务中</p>
          </div>
          <div class="home-at-today-conent-child">
            <p class="child-nums">2个</p>
            <p class="child-type">待服务</p>
          </div>
          <div class="home-at-today-conent-child">
            <p class="child-nums">2个</p>
            <p class="child-type">已完成</p>
          </div>
          <div class="home-at-today-conent-child">
            <p class="child-nums">2个</p>
            <p class="child-type">已取消</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home-data-view">
      <div class="view-title">
        <span class="view-title-des">数据总览</span>
        <DatePicker v-model="time" type="daterange" placeholder="请选择时间" class="search-time"></DatePicker>
      </div>
      <div class="home-data-view-data">
        <Row :gutter="16">
          <Col span="6">
            <div class="data-view">
              <div class="data-view-left">图示</div>
              <div class="data-view-right">
                <p>总用户数</p>
                <p class="data-view-right-num">2000</p>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="data-view">
              <div class="data-view-left">图示</div>
              <div class="data-view-right">
                <p>总服务次数</p>
                <p class="data-view-right-num">180</p>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="data-view">
              <div class="data-view-left">图示</div>
              <div class="data-view-right">
                <p>总收款金额</p>
                <p class="data-view-right-num">31800</p>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="data-view">
              <div class="data-view-left">图示</div>
              <div class="data-view-right">
                <p>好评率</p>
                <p class="data-view-right-num">100%</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="home-chart">
      <Row :gutter="24">
        <Col span="12">
          <div class="chart-show">
            <p class="title">
              <span>医护出诊情况</span>
            </p>
            <p>
              <span class="title-des">数据总览</span>
              <DatePicker v-model="time" type="daterange" placeholder="请选择时间" class="search-time"></DatePicker>
            </p>
          </div>
          <div class="chart-data">
            <ve-line :data="chartData" :setting="chartSetting" ref="chart1"></ve-line>
          </div>
        </Col>
        <Col span="12">
          <div class="chart-show">
            <p class="title">
              <span>业务类型情况</span>
            </p>
            <p>
              <span class="title-des">数据总览</span>
              <DatePicker v-model="time" type="daterange" placeholder="请选择时间" class="search-time"></DatePicker>
            </p>
          </div>
          <div class="chart-data">
            <ve-line :data="chartData" :setting="chartSetting" ref="chart2"></ve-line>
          </div>
        </Col>
      </Row>
      <Row :gutter="24">
        <Col span="12">
          <div class="chart-show">
            <p class="title">
              <span>订单变化情况</span>
            </p>
            <p>
              <span class="title-des">数据总览</span>
              <DatePicker v-model="time" type="daterange" placeholder="请选择时间" class="search-time"></DatePicker>
            </p>
          </div>
          <div class="chart-data">
            <ve-line :data="chartData" :setting="chartSetting" ref="chart3"></ve-line>
          </div>
        </Col>
        <Col span="12">
          <div class="chart-show">
            <p class="title">
              <span>收入变化情况</span>
            </p>
            <p>
              <span class="title-des">数据总览</span>
              <DatePicker v-model="time" type="daterange" placeholder="请选择时间" class="search-time"></DatePicker>
            </p>
          </div>
          <div class="chart-data">
            <ve-line :data="chartData" :setting="chartSetting" ref="chart4"></ve-line>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    this.chartSetting = {
      // labelMap: {
      //     PV: "访问用户"
      //   },
      dataType: {
        访问用户: "KMB",
        下单用户: "KMB",
        下单率: "KMB"
      }
    };
    return {
      time: "",
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      }
    };
  },
  mounted() {
    this.resizeChart();
  },
  methods: {
    resizeChart() {
      for (let i = 1; i <= 4; ++i) {
        this.$nextTick(function() {
          this.$refs[`chart${i}`].echarts.resize();
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@font-size-title: 14px;
@font-size-des: 12px;

.home {
  color: #000;
}
.home-at {
  display: -webkit-flex; /* Safari */
  display: flex;
  color: #000;
  .des {
    font-size: @font-size-title;
  }
  &-agen,
  &-today {
    width: 50%;
    padding: 8px;
  }
  .home-at-agen-conent {
    border: 1px solid #d1d0d0;
    margin-top: 12px;
    padding-bottom: 8px;
    padding-left: 8px;
    p {
      font-size: @font-size-des;
      padding-top: 8px;
      span {
        color: #4a5aba;
        cursor: pointer;
      }
      &:nth-child(1) span {
        margin-left: 57px;
      }
      &:nth-child(2) span {
        margin-left: 45px;
      }
      &:last-child span {
        margin-left: 69px;
      }
    }
  }
  &-today-conent {
    display: flex;
    border: 1px solid #d1d0d0;
    margin-top: 12px;
    padding-bottom: 8px;
    padding-left: 8px;
    height: 88px;
    justify-content: space-around;
    align-items: center;
    &-child {
      font-size: @font-size-des;
    }
    .child-nums {
      padding: 8px;
    }
  }
}
.home-data-view {
  margin-top: 20px;
  .view-title {
    .search-time {
      margin-left: 50px;
      width: 200px;
    }
    &-des {
      padding: 8px;
      font-size: @font-size-title;
    }
  }
  &-data {
    padding: 8px;
    margin-top: 15px;
    .data-view {
      display: flex;
      height: 60px;
      align-items: center;
      border: 1px solid #dddddd;
      &-left {
        background-color: #009788;
        padding: 20px;
        color: #fff;
      }
      &-right {
        margin: auto;
        &-num {
          font-size: 18px;
          text-align: center;
          font-weight: 500;
        }
      }
    }
  }
}
.home-chart {
  padding: 8px;
  .chart-show {
    margin-top: 8px;
    margin-bottom: 8px;
    .title {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 6px;
    }
    .title-des {
      font-size: 13px;
    }
    .search-time {
      margin-left: 62px;
      width: 200px;
    }
  }
  .chart-data {
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
