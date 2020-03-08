<template>
  <div class="main">
    <div class="banner">
      <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in bannerList"
            :key="index"
          >
            <img
              :src="'http://movie.miguvideo.com/publish' + item.url"
              alt=""
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <Filmbox title="影史100个经典角色" :slides="roleList"></Filmbox>
    <Filmbox title="影史100人" :slides="hundredList"></Filmbox>
    <div class="film_box">
      <h2 class="h2">电影魔方</h2>
      <ul class="list">
        <li
          v-for="(item, index) in boxList"
          :key="index"
          :class="'li' + index"
          :style="{ background: coloeList[index] }"
        >
          <a href="">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <Filmbox title="她们说：女性导演作品推荐" :slides="womanList"></Filmbox>
    <Filmbox title="漫威大宇宙集结" :slides="marvelList"></Filmbox>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import Axios from 'axios'
import Filmbox from '../../../components/Filmbox'
import getFilmList from '../../../components/axios'
export default {
  components: {
    [Filmbox.name]: Filmbox
  },
  data () {
    return {
      bannerList: [],
      roleList: [],
      hundredList: [],
      boxList: [],
      coloeList: [
        'rgba(193,129,129,0.85)',
        'rgba(173,97,97,0.85)',
        'rgba(178,81,81,0.85)',
        'rgba(173,98,98,0.85)',
        'rgba(153,73,73,0.85)',
        'rgba(173,97,97,0.85)',
        'rgba(153,73,73,0.85)',
        'rgba(173,98,98,0.85)',
        'rgba(194,129,129,0.85)',
        'rgba(153,73,73,0.85)'
      ],
      womanList: [],
      marvelList: []
    }
  },
  watch: {
    bannerList () {
      this.$nextTick(() => {
        this.mySwiper.update()
      })
    }
  },
  created () {
    getFilmList(Axios, {
      nodeId: 70035127,
      pagesize: 3,
      pageidx: 1
    }).then(response => {
      let frousArr = []
      let bookinArr = []
      let splendidArr = []
      frousArr.push(...response.data[1].list)
      bookinArr.push(...response.data[0].list)
      splendidArr.push(...response.data[2].list)
      this.bannerList = bookinArr.map(item => {
        return { url: item.imgSrc }
      })
      this.roleList = frousArr.map(item => {
        return {
          url: 'http://movie.miguvideo.com/publish' + item.imgSrc,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
      this.hundredList = splendidArr.map(item => {
        return {
          url: 'http://movie.miguvideo.com/publish' + item.imgSrc,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
    })
    getFilmList(Axios, {
      nodeId: 70035127,
      pagesize: 3,
      pageidx: 2
    }).then(response => {
      let frousArr = []
      let bookinArr = []
      let splendidArr = []
      frousArr.push(...response.data[1].list)
      bookinArr.push(...response.data[0].list)
      splendidArr.push(...response.data[2].list)
      this.boxList = bookinArr.map(item => {
        return { name: item.name }
      })
      frousArr = frousArr.filter(item => {
        return item.imgSrcV
      })
      this.womanList = frousArr.map(item => {
        return {
          url: 'http://movie.miguvideo.com' + item.imgSrcV,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
      splendidArr = splendidArr.filter(item => {
        return item.imgSrcV
      })
      this.marvelList = splendidArr.map(item => {
        return {
          url: 'http://movie.miguvideo.com' + item.imgSrcV,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
    })
  },
  mounted () {
    this.mySwiper = new Swiper(this.$refs['mySwiper'], {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss">
.list {
  width: 100%;
  li {
    float: left;
    width: 25%;
    height: 82px;
    text-align: center;
    line-height: 82px;
    border-right: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    box-sizing: border-box;
    a {
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }
  .li0,
  .li5 {
    width: 50% !important;
  }
}
.h2 {
  height: 45px;
  color: #666;
  font-size: 16px;
  position: relative;
  line-height: 45px;
  padding-left: 8px;
  &::after {
    content: '';
    display: inline-block;
    width: 3px;
    height: 23px;
    position: absolute;
    left: 0;
    top: 10px;
    background: red;
  }
}
</style>
