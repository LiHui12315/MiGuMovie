<template>
  <div class="xcinema">
    <div class="x-box5">
      <div class="x-fujin">
        <van-tabs v-model="active" :line-width="'73px'" :color="'#f74444'" :line-height="'2px'" :title-active-color="'#f74444'">
          <van-tab title="附近"></van-tab>
        </van-tabs>
      </div>
    </div>
    <cinemaItem  v-for="item in cinemaList" :key="item.cinemaId" :xcinemaInfo="item" ></cinemaItem>
  </div>
</template>

<script>
import cinemaItem from '@/views/lovev/ticket/cinemaItem'
import axios from 'axios'
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab).use(Tabs)

export default {
  name: 'cinema',

  data () {
    return {
      active: 2,
      cinemaList: []
    }
  },

  components: {
    cinemaItem
  },
  created () {
    axios
      .post(
        '/api/mta-service/data/migu/validCinemaes.jsp',
        {
          cityCode: 4900,
          orderType: 1,
          longitude: '',
          latitude: ''
        },
        {
          transformRequest (data) {
            let arr = []
            for (let key in data) {
              arr.push(`${key}=${data[key]}`)
            }
            return arr.join('&')
          }
        }
      )
      .then(res => {
        // console.log(res.data.cinemaes)
        this.cinemaList = res.data.cinemaes
      })
  }
}
</script>

<style lang='scss'>
.x-box5 {
  height: 44px;
  margin-top: 45px;
}
.x-fujin {
  width: 73px;
  height: 41px;
}
</style>
