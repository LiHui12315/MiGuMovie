<template>
  <div class="buyonline">
    <div class="top">
      <div class="tl" @click="back"><van-icon name="arrow-left" /></div>
      <div class="tc">{{ cinemae.cinemaName }}</div>
      <div class="tr"></div>
    </div>
    <div class="main">
      <div class="more">
        <div class="ml">
          <i>{{ cinemae.cinemaName }}</i>
          <p>{{ cinemae.cinemaAdd }}</p>
        </div>
        <div class="mr">
          <van-icon name="phone-o" />
        </div>
      </div>
      <div class="hot">
        <i class="three"></i>
        <ul class="ul">
          <li
            v-for="fils in filslist"
            :key="fils.filmId"
            :class="{ show: fils.filmId == filsId }"
            @click="fn1(fils.filmId, fils)"
          >
            <img :src="fils.picAddr" alt="" />
          </li>
        </ul>
      </div>
      <div class="h1">{{ filmName }}</div>
      <div class="weeks">
        <div
          class="week"
          v-for="(week, index) in weeklist"
          :key="index"
          :class="{ active: bottom == index }"
          @click="weekfn(index)"
        >
          {{ week.showdate | time }}
        </div>
      </div>
      <div class="msg">周五特惠10:00限量开枪 全场购票第二张9.9元</div>
      <div class="showtime" v-show='weeklist.length>0'>
        <div class="afternoon">
          <div class="top" v-if="weeka.length">
            <div class="center">
              <img src="http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/images/icon/afternoon-Season.png" alt="">
              <span>下午场</span>
            </div>
          </div>
          <div class="timelist" v-if="weeka.length">
            <div class="time" v-for="(show, index) in weeka" :key="index">
              <div class="left">
                <b>{{ show.showTime | movietime }}</b>
                <i>100分钟</i>
              </div>
              <div class="center">
                <p>{{ show.language }}/{{ show.edition }}</p>
                <i>{{ show.hallName }}</i>
              </div>
              <div class="price">{{ show.listingPrice | price }}</div>
              <div class="right" @click="buytitck(show)">在线购票</div>
            </div>
          </div>
        </div>
        <div class="night">
          <div class="top" v-show="weekw.length">
            <div class="center">
              <img src="http://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/images/icon/overnight-Season.png" alt="">
              <span>夜间场</span>
            </div>
          </div>
          <div class="timelist" v-if="weekw.length">
            <div class="time" v-for="(show, index) in weekw" :key="index">
              <div class="left">
                <b>{{ show.showTime | movietime }}</b>
                <i>100分钟</i>
              </div>
              <div class="center">
                <p>{{ show.language }}/{{ show.edition }}</p>
                <i>{{ show.hallName }}</i>
              </div>
              <div class="price">{{ show.listingPrice | price }}</div>
              <div class="right" @click="buytitck(show)">在线购票</div>
            </div>
          </div>
        </div>
      </div>
      <div class="noshow" v-show="weeklist.length==0">当前电影没有排片</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
import { Row, Col, Icon } from 'vant'
Vue.use(Row)
  .use(Col)
  .use(Icon)
export default {
  filters: {
    time (val) {
      var arr = val.split('-')
      let week = new Date(arr.join('/')).getDay()
      let weekarr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      week = weekarr[week]
      arr.shift()
      let str = arr.join('-')
      return str + ' ' + week
    },
    movietime (val) {
      let str1 = val[0] + val[1]
      let str2 = val[2] + val[3]
      return str1 + ':' + str2
    },
    price (val) {
      return '￥' + val / 100
    }
  },
  methods: {
    ...mapMutations(['titckspush']),
    buytitck (obj) {
      obj.cinemaName = this.cinemae.cinemaName
      this.titckspush(obj)
    },
    back () {
      this.$router.go(-1)
    },
    fn1 (id, b) {
      this.filsId = id
      this.filmName = b.filmName
      axios
        .post(
          '/api/mta-service/data/migu/userShows.jsp',
          {
            cinemaId: this.cinemae.cinemaId,
            filmId: this.filsId,
            count: 10
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
          this.weeklist = res.data.dayShows
          this.bottom = 0
          this.weeka = []
          this.weekw = []
          this.weeklist[0].shows.forEach(a => {
            if (a.showTime < 1200) {
              this.weekz.push(a)
            }
            if (a.showTime > 1900) {
              this.weekw.push(a)
            }
            if (a.showTime > 1200 && a.showTime < 1900) {
              this.weeka.push(a)
            }
          })
        })
    },
    weekfn (index) {
      this.bottom = index
      this.weeka = []
      this.weekw = []
      this.weeklist[index].shows.forEach(a => {
        if (a.showTime < 1200) {
          this.weekz.push(a)
        }
        if (a.showTime > 1900) {
          this.weekw.push(a)
        }
        if (a.showTime > 1200 && a.showTime < 1900) {
          this.weeka.push(a)
        }
      })
    }
  },
  watch: {
    filslist () {
      setTimeout(() => {
        document.querySelector('.ul').style.left =
          -1 *
            (document.querySelector('.show').offsetLeft -
              document.documentElement.clientWidth / 2 +
              41.25) +
          'px'
      }, 0)
    },
    filsId () {
      setTimeout(() => {
        document.querySelector('.ul').style.left =
          -1 *
            (document.querySelector('.show').offsetLeft -
              document.documentElement.clientWidth / 2 +
              41.25) +
          'px'
      }, 0)
    }
  },
  data () {
    return {
      filslist: [],
      filsId: this.$store.state.filmId,
      filmName: this.$store.state.filmName,
      weeklist: [],
      bottom: 0,
      weekz: [],
      weeka: [],
      weekw: []
    }
  },
  computed: {
    ...mapState(['cinemae', 'filmId'])
  },
  created () {
    axios
      .post(
        '/api/mta-service/data/migu/cinemaMovie.jsp',
        {
          cinemaId: this.cinemae.cinemaId,
          type: 0
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
        res = res.data.movies
        this.filslist = res
      })
    axios
      .post(
        '/api/mta-service/data/migu/userShows.jsp',
        {
          cinemaId: this.cinemae.cinemaId,
          filmId: this.filsId,
          count: 10
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
        this.weeklist = res.data.dayShows
        this.weeka = []
        this.weekw = []
        this.weeklist[0].shows.forEach(a => {
          if (a.showTime < 1200) {
            this.weekz.push(a)
          }
          if (a.showTime > 1900) {
            this.weekw.push(a)
          }
          if (a.showTime > 1200 && a.showTime < 1900) {
            this.weeka.push(a)
          }
        })
      })
  }
}
</script>

<style lang="scss">
.buyonline {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow-y: auto;
  }
  .top {
    box-sizing: border-box;
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
    font-size: 20px;
    color: #666;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    .tl {
      color: #000;
    }
    .tc {
      text-align: center;
      font-size: 16px;
    }
    // .tr {
    //   display: none;
    // }
  }
  .more {
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    .ml {
      height: 100%;
      width: 85%;
      i {
        line-height: 31px;
        font-size: 16px;
        color: #666;
      }
      p {
        line-height: 23px;
        font-size: 12px;
      }
    }
    .mr {
      font-size: 28px;
      line-height: 56px;
      margin-right: 10px;
      color: #2bbce3;
    }
  }
  .hot {
    height: 163px;
    background: url('/img/d-bg.png') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0 15px;
    .three {
      border-bottom: 10px solid #fff;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    ul {
      width: 100%;
      height: 124px;
      display: flex;
      position: relative;
      transition: 0.3s all linear;
      li {
        width: 82.5px;
        height: 124px;
        flex-shrink: 0;
        margin-right: 15px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .show {
        border: 2px solid #e7e7e7;
        box-sizing: border-box;
        transform: scale(1.1, 1.1);
      }
    }
  }
  .h1 {
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 16px;
    line-height: 50px;
    color: #666;
  }
  .weeks {
    width: 100%;
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .week {
      width: 83.33px;
      height: 100%;
      box-sizing: border-box;
      text-align: center;
      line-height: 50px;
      font-size: 14px;
      flex-shrink: 0;
    }
    .active {
      border-bottom: 2px solid #f74444;
      color: #f74444;
    }
  }
  .msg {
    width: 100%;
    font-size: 10px;
    text-align: center;
    height: 25px;
    line-height: 25px;
    background-color: #fbeedd;
  }
  .showtime {
    width: 100%;
    .top{
      height: 46px;
      display: flex;
      justify-content: space-around;
      border: 0px;
      .center{
        img{
          height: 16px;
          width: 16px;
          margin-top: 15px;
          margin-right: 5px;
        }
        span{
          font-size: 14px;
          position: relative;
          top: -3px;
        }
      }
    }
    .afternoon{
      width: 100%;
    }
    .timelist{
      padding: 0 12px;
      .time {
        height: 65px;
        width: 100%;
        padding: 12px 0;
        display: flex;
        box-sizing: border-box;
        border-bottom: 1px solid #e6e6ee;
        .left{
          width: 25%;
          height: 100%;
          line-height: 20px;
          b{
            font-size: 16px;
            display: block;
          }
          i{
            font-size: 12px;
            color: #666;
          }
        }
        .center{
          width: 30%;
          height: 100%;
          line-height: 20px;
          p{
            font-size: 14px;
          }
          i{
            font-size: 12px;
            color: #666;
          }
        }
        .price{
          width: 25%;
          height: 100%;
          line-height: 40px;
          font-size: 20px;
          text-align: center;
          color: #F74444;
        }
        .right{
          width: 20%;
          height: 26px;
          border: 1px solid #F74444;
          border-radius: 5px;
          text-align: center;
          line-height: 26px;
          font-size: 14px;
          color: #F74444;
          margin-top: 6px;
        }
      }
    }
  }
  .noshow {
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
  }
}
</style>
