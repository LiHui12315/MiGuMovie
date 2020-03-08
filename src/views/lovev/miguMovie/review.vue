<template>
  <div class="film_review">
    <ul>
      <li v-for="(item,index) in reviewList" :key="index">
          <a href="">
            <img :src="item.url" alt="">
            <span class="spann">{{item.name}}</span>
          </a>
        <div class="mengban">
        </div>
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
      reviewList: []
    }
  },
  created () {
    getFilmList(Axios, {
      nodeId: 70022797,
      pagesize: 3,
      pageidx: 1
    }).then(response => {
      let frousArr = []
      frousArr.push(...response.data[0].list)
      this.reviewList = frousArr.map(item => {
        return {
          name: item.name,
          url: '/api/publish' + item.picList[0].imgSrc
        }
      })
      console.log(this.reviewList)
    })
  }
}
</script>

<style lang='scss'>
.film_review{
  li{
    position: relative;
    margin-bottom: 5px;
    height: 178px;
    img{
      height: 178px;
    }
    .spann{
      position: absolute;
      top: 50%;
      left: 35px;
      right: 35px;
      color: #fff;
      font-weight: bold;
      z-index: 1;
      text-align: center;
    }
    .mengban{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(0,0,0,0.5)
    }
  }
}
</style>
