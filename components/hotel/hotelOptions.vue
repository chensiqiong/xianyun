<template>
  <div class="hotel_options">
    <div class="option_item br">
      <div class="option_head">
        <span>价格</span>
        <span>0 - {{options.price_in}}</span>
      </div>
      <div class="block">
        <el-slider v-model="options.price_in" :max="4000" @change="changeOptions"></el-slider>
      </div>
    </div>
    <div class="option_item br">
      <div class="option_head">
        <span>住宿等级</span>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>2星</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="options.hotellevel">
            <div
              style="width: 120px; margin: 20px 0 0 20px;"
              v-for="(item,index) in optionsData.levels"
              :key="item.id"
            >
              <el-checkbox
                :label="optionsData.levels[index].id"
                @change="changeOptions(item.id)"
              >{{item.name}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="option_item br">
      <div class="option_head">
        <span>住宿类型</span>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>不限</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="options.hoteltype">
            <div
              style="width: 120px; margin: 20px 0 0 20px;"
              v-for="(item,index) in optionsData.types"
              :key="item.id"
            >
              <el-checkbox
                :label="optionsData.types[index].id"
                @change="changeOptions(item.id)"
              >{{item.name}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="option_item br">
      <div class="option_head">
        <span>酒店设施</span>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>不限</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="options.hotelasset">
            <div
              style="width: 120px; margin: 20px 0 0 20px;"
              v-for="(item,index) in optionsData.assets"
              :key="item.id"
            >
              <el-checkbox
                :label="optionsData.assets[index].id"
                @change="changeOptions(item.id)"
              >{{item.name}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="option_item">
      <div class="option_head">
        <span>酒店品牌</span>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>2星</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="options.hotelbrand">
            <div
              style="width: 120px; margin: 20px 0 0 20px;"
              v-for="(item,index) in optionsData.brands"
              :key="item.id"
            >
              <el-checkbox
                :label="optionsData.brands[index].id"
                @change="changeOptions(item.id)"
              >{{item.name}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        price_in: 0,
        hotellevel: [],
        hoteltype: [],
        hotelbrand: [],
        hotelasset: []
      },
      optionsData: {
        levels: [],
        types: [],
        assets: [],
        brands: []
      }
    };
  },
  mounted() {
    this.$axios.get("/hotels/options").then(res => {
      console.log(res);
      if (res.status === 200) {
        this.optionsData = res.data.data;
      }
    });
  },
  methods: {
    changeOptions(value) {
      console.log(this.options);
      this.$emit("changeOptions", this.options);
    }
  }
};
</script>

<style lang="less" scoped>
.hotel_options {
  border: 1px solid #ddd;
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  .option_item {
    &:first-child {
      width: 25%;
    }
    width: 18%;
    padding: 10px 20px;
    font-size: 14px;
    color: #666;
    .option_head {
      display: flex;
      justify-content: space-between;
    }
    .el-dropdown {
      width: 100%;
      .el-dropdown-link {
        width: 100%;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .br {
    border-right: 1px solid #ddd;
  }
}
</style>