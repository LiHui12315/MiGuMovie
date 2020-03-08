<template>
  <div class="xticket">
    <div class="x-box">
      <div class="x-box1">
        <div class="x-con1">
          <van-tabs type="card" :color="'#f74444'" v-model="active">
            <van-tab title="影片" :to="'/lovev/ticket/films'"></van-tab>
            <van-tab title="影院" :to="'/lovev/ticket/cinema'"></van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab).use(Tabs)

export default {
  data () {
    return {
      active: this.$route.meta.xTabIndex || 0
    }
  }
}
</script>

<style lang="scss">
.xticket{
  position: relative;
}
.x-box{
  height: 44px;
  // width: 100%;
  // position: absolute;
  // top: 0;
  // height: auto!important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;
}
.x-box1{
  height: 37px;
  padding-top: 7px;
  border-bottom: 1px solid #E6E6E6;
}
.x-con1{
  width: 163px;
  height: 30px;
  margin: 0 auto;
}
.van-tabs__nav--card {
  border-radius: 5px;
}
</style>
