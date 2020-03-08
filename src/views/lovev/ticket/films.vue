<template>
  <div class="x-films">
    <div class="x-box2">
      <van-tabs v-model="active" :line-width="'205px'" :color="'#f74444'" :line-height="'2px'" :title-active-color="'#f74444'">
        <van-tab title="正在热映" :to="'/lovev/ticket/films/hit'"></van-tab>
        <van-tab title="即将上映" :to="'/lovev/ticket/films/soon'"></van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab).use(Tabs)
export default {
  name: 'Films',
  data () {
    return {
      active: this.$route.meta.xtabIndex || 0
    }
  }
}
</script>

<style lang='scss'>
.x-box2{
  height: 46px;
  margin-top: 45px
}
</style>
