<template>
  <div class="main">
    <div class="banner_box">
      <LvSwiper :slides="bannerList" effect="coverflow" :centeredSlides="true"></LvSwiper>
    </div>
    <div class="films_box">
        <Filmbox title="正在热映" :slides="booking"></Filmbox>
    </div>
    <div class="pikaqiu">
      <h2 class="h2">精彩活动</h2>
      <LvSwiper :slides="splendidList" style="width:374px"></LvSwiper>
    </div>
  </div>
</template>

<script>
import Swiper from '../../../components/Swiper'
import Filmbox from '../../../components/Filmbox'
import Axios from 'axios'
export default {
  components: {
    [Swiper.name]: Swiper,
    [Filmbox.name]: Filmbox
  },
  data () {
    return {
      bannerList: [],
      booking: [],
      imgUrl: '',
      splendidList: []
    }
  },
  created () {
    Axios.post(
      '/api/lovev/miguMovie/data/seeFilmData.jsp',
      {
        nodeId: 70022794,
        pagesize: 3,
        pageidx: 1
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
    ).then(response => {
      let frousArr = []
      let bookinArr = []
      let splendidArr = []
      frousArr.push(...response.data[1].list)
      bookinArr.push(...response.data[0].list)
      splendidArr.push(...response.data[2].list)
      this.bannerList = bookinArr.map(item => {
        return { url: item.imgSrc }
      })
      this.booking = frousArr.map(item => {
        return {
          url: 'http://movie.miguvideo.com/publish' + item.imgSrc,
          name: item.name,
          content: item.LONG_NAME,
          cid: item.SRC_CONT_ID
        }
      })
      this.splendidList = splendidArr.map(item => {
        return {
          url: item.imgSrc
        }
      })
    })
  },
  methods: {
    go (cid) {
      this.$route.push(`/film/${this.id}`)
    }
  },
  watch: {
    id (newVal) {
      this.$route.push(`/film/${this.id}`)
    }
  }
}
</script>

<style lang="scss">
.films_box{
  margin-bottom: 10px;
}
.banner_box {
  padding: 30px 0;
  background: #ccc;
  .swiper-wrapper {
    width: 100%;
    .swiper-slide,
    img {
      width: 188px;
      height: 278px;
    }
  }
}
.pikaqiu{
  .swiper-wrapper{
    width: 375px;
    height:140px;
    .swiper-slide{
      width: 375px !important;
    }
    img {
      width: 375px;
      height: 100%;
    }
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
