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
    <div class="film_list">
      <h2 class="h2">热门推荐(免费)</h2>
      <ul class="free_list">
        <li v-for="(item, index) in freeList" :key="index" class="slide">
          <div class="img">
            <img
              :src="'http://movie.miguvideo.com/publish' + item.url"
              alt=""
            />
          </div>
          <p class="font14">{{ item.name }}</p>
          <p class="font13">{{ item.content }}</p>
        </li>
      </ul>
    </div>
    <Filmbox title="票房过亿的电影" :slides="moreThen"></Filmbox>
    <Filmbox title="豆瓣评分8.0+的电影" :slides="doubai"></Filmbox>
    <Filmbox title="咪咕独播" :slides="dubo"></Filmbox>
    <Filmbox title="24小时电影直播" :slides="zhibo"></Filmbox>
    <div class="always_box">
      <h2 class="h2">分分钟赏片</h2>
      <div class="always">
        <div class="always_left">
          <img :src="imgArr[0]" alt="">
          <p class="p font14">5分钟看完《我身体里的那个家伙》</p>
        </div>
        <div class="always_right">
          <img :src="imgArr[1]" alt="">
          <p class="p">4分钟看完《伊娃》</p>
          <img :src="imgArr[2]" alt="">
          <p class="p">3分钟看完《空中危机》</p>
        </div>
      </div>
    </div>
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
      freeList: [],
      moreThen: [],
      doubai: [],
      dubo: [],
      zhibo: [],
      imgArr: []
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
      nodeId: 70022795,
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
      this.freeList = frousArr.map(item => {
        return {
          url: item.imgSrc,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
      this.moreThen = splendidArr.map(item => {
        return {
          url: 'http://movie.miguvideo.com' + item.imgSrcV,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
    })
    getFilmList(Axios, {
      nodeId: 70022795,
      pagesize: 3,
      pageidx: 2
    }).then(response => {
      let frousArr = []
      let bookinArr = []
      let splendidArr = []
      frousArr.push(...response.data[1].list)
      bookinArr.push(...response.data[0].list)
      splendidArr.push(...response.data[2].list)
      bookinArr = bookinArr.filter(item => {
        return item.imgSrcV
      })
      this.doubai = bookinArr.map(item => {
        return {
          url: item.imgSrcV,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
      this.dubo = frousArr.map(item => {
        return {
          url: '/api' + item.imgSrcV,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
      this.zhibo = splendidArr.map(item => {
        return {
          url: '/api/publish' + item.imgSrc,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
    })
    getFilmList(Axios, {
      nodeId: 70022795,
      pagesize: 3,
      pageidx: 3
    }).then(response => {
      let frousArr = []
      frousArr.push(...response.data[0].list)
      this.imgArr = frousArr.map(item => {
        return '/api/publish' + item.imgSrc
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
.banner {
  .swiper-container {
    height: 215px;
    img {
      height: 215px;
      width: 100%;
    }
  }
}
.free_list {
  overflow: hidden;
}
.slide {
  float: left;
  width: 120px;
  height: 229px;
  margin: 0 2px;
  .img {
    width: 118px;
    height: 175px;
    background: #ccc;
  }
  .font14 {
    padding-left: 12px;
    line-height: 30px;
    font-size: 14px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .font13 {
    padding-left: 12px;
    color: #999;
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
.always{
  display: flex;
  .p{
    font-size: 14px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding:8px 12px;
  }
}
.always_left{
  width: 187.5px;
  margin-right: 2px;
  img{
      width: 187.5px;
      height: 270px;
  }
}
.always_right{
  img{
      width: 188.5px;
      height: 108px;
    }
  }
  .h2{
  height: 45px;
  color:#666;
  font-size: 16px;
  position: relative;
  line-height: 45px;
  padding-left:8px;
  &::after{
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
