<template>
  <div class="xfilmitem">
    <div class="x-left1">
      <img :src="xFilmInfo.h5pics.highResolutionV" alt="">
    </div>
    <div class="x-con21">
      <h2>{{ xFilmInfo.filmName }}</h2>
      <p>导演：{{ xFilmInfo.director }}</p>
      <p>{{ xFilmInfo.actor | formatActors }}</p>
    </div>
    <div class="x-right1">
      <van-button plain type="primary" :color="'#6BBCCB'" v-if="xFilmInfo.aat === 0" to="/lovev/buy" @click="xFilmId(xFilmInfo)">预 售</van-button>
      <van-button plain type="primary" :color="'#f74444'" v-if="xFilmInfo.aat === 1" to="/lovev/buy" @click="xFilmId(xFilmInfo)">购 票</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
import { mapMutations } from 'vuex'

Vue.use(Button)

export default {
  data () {
    return {
      gparr: []
    }
  },
  name: 'filmItem1',
  props: {
    xFilmInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    ...mapMutations(['xFilmId'])
  },

  created () {
    // console.log(this.xFilmInfo)
    const xdate = new Date(this.xFilmInfo.openingDate.split('-').join('/')).getTime()
    const ndate = new Date().getTime()
    if (xdate > ndate) {
      this.xFilmInfo.aat = 0
    } else {
      this.xFilmInfo.aat = 1
    }
  },

  filters: {
    formatActors (value) {
      return value.split(' ').join('/')
    }
  }
}
</script>

<style lang="scss">
.xfilmitem{
  display: flex;
  padding: 12px 12px 0;
  border-bottom: 1px solid #e7e7e7;
  height: 115px;
}

.x-left1{
  width: 73px;
  height: 110px;
  padding: 0 11px 0 0;
  flex-shrink: 0;
}

img{
  width: 100%;
  height: 100%;
}

.x-con21{
  flex: 1;
  padding: 0 15px 0 0;
  overflow: hidden;
}

.x-con21 h2{
  color: #666;
  font-size: 16px;
  display: inline-block;
  margin: 12px 0 28px 0;
  font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
}

.x-con21 p{
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
  color: #1a1a1a;
  font-size: 14px
}

.x-right1{
  width: 46px;
  height: 26px;
  flex-shrink: 0;
  margin-top: 56px;
  margin-right: 8px;
}

.van-button{
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 26px;
  width: 46px;
  margin: 0;
  padding: 0;
  font-size: 12px;
  line-height: 26px;
  text-align: center;
  border-radius: 5px;
}

</style>
