<template>
  <div class="smallVideo">
    <ul class="video_list">
      <li v-for="(item ,index) in videoList" :key="index">
        <a href="">
          <img :src="item.url" alt="" />
          <span class="span">{{item.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'
import getFilmList from '../../../components/axios'
export default {
  data () {
    return {
      videoList: []
    }
  },
  created () {
    getFilmList(Axios, {
      nodeId: 70027030,
      pagesize: 3,
      pageidx: 1
    }).then(response => {
      let frousArr = []
      frousArr.push(...response.data[1].list)
      this.videoList = frousArr.map(item => {
        return {
          name: item.name,
          url: '/api/publish' + item.picList[0].imgSrc
        }
      })
    })
  }
}
</script>

<style lang="scss">
.video_list{
  li{
    position: relative;
    .span{
      position: absolute;
      bottom: 12px;
      left: 12px;
      right: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
