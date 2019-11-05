<template>
  <div class="hotel">
    <div class="bread_head">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item>南京市酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="filter_inputs">
      <filterHotels @getHotels="getHotels" @getCityName="getCityName"></filterHotels>
    </div>
    <div class="hotel_cities">
      <div class="cities_text">
        <hotelCities v-if="cities.total" :cities="cities.data[0]"></hotelCities>
      </div>
      <div class="cities_map">
        <hotelMap :location="hotelLocation"></hotelMap>
      </div>
    </div>
    <div class="filter_dorpdowns">
      <hotelOptions @changeOptions="changeOptions"></hotelOptions>
    </div>
  </div>
</template>

<script>
import filterHotels from "@/components/hotel/filterHotels.vue";
import hotelCities from "@/components/hotel/hotelCities.vue";
import hotelMap from "@/components/hotel/hotelMap.vue";
import hotelOptions from "@/components/hotel/hotelOptions.vue";
export default {
  data() {
    return {
      cities: {
        data: [],
        total: ""
      },
      cityName: "南京市",
      hotels: {
        city: 74
      },
      hotelLocation: {
        data: []
      }
    };
  },
  mounted() {
    this.init();
  },
  components: {
    filterHotels,
    hotelCities,
    hotelMap,
    hotelOptions
  },
  methods: {
    getHotels(data) {
      this.hotels.enterTime = data.enterTime;
      this.hotels.leftTime = data.leftTime;
      this.hotels.city = data.city;
      console.log(this.hotels);

      // console.log(data);
      // this.$axios.get("/hotels", { params: data }).then(res => {
      //   console.log(res);
      //   if (res.status === 200) {
      //     this.hotelLocation = res.data;
      //   }
      // });
    },
    getCityName(name) {
      this.cityName = name;
      this.init();
    },
    changeOptions(options) {
      console.log(options);
      // options.hotellevel = this.hotels.hotellevel;
      // if (options.hotellevel.length > 0) {
      //   options.hotellevel.forEach(e => {
      //     this.hotels.hotellevel = e;
      //   });
      // }
      this.hotels.hotellevel = 3;
      // if (options.price_in !== 0) {
      //   this.hotels.price_in = options.price_in;
      // }
      this.$message.success("正在为您查询");
      console.log(this.hotels);

      this.init();
    },
    init() {
      this.$axios
        .get("/cities", {
          params: { name: this.cityName }
        })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.cities = res.data;
            this.hotels.city = res.data.data[0].id;
            this.$axios.get("/hotels", { params: this.hotels }).then(res2 => {
              console.log(res2);
              this.hotelLocation = res2.data;
              console.log(this.hotelLocation);
            });
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.hotel {
  width: 1000px;
  margin: 0 auto;
  .bread_head {
    font-weight: 400;
    color: #606266;
    padding: 20px 0;
  }
  .hotel_cities {
    display: flex;
    .cities_text {
      flex: 4;
    }
    .cities_map {
      flex: 3;
      .tip {
        height: 100%;
        font-size: 20px;
        color: orange;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .filter_dorpdowns {
    width: 100%;
    margin: 20px 0;
  }
}
</style>