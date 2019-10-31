<template>
  <div class="flights_filter">
    <div class="filter_main">
      <div class="main_path">单程：{{flightsInfo.departCity}} - {{flightsInfo.destCity}} / 2019-10-31</div>
      <div class="main_selects">
        <div class="select_item">
          <el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select_item">
          <el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="filters_btns">
      筛选：
      <el-button type="primary" round size="mini">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["flightsInfo"],
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  mounted() {
    console.log(this.flightsInfo);
  }
};
</script>

<style lang="less" scoped>
.flights_filter {
  .filter_main {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main_path {
      font-size: 13px;
    }
    .main_selects {
      display: flex;
      .select_item {
        width: 120px;
        margin-left: 10px;
      }
    }
  }
  .filters_btns {
    padding: 0 0 20px;
    font-size: 14px;
    button {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover {
        background-color: #409eff;
        color: #fff;
      }
    }
  }
}
</style>