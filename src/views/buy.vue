<template>
  <div class="buy">
    <van-row type="flex" justify="space-between" class="top">
      <van-col span="6"><van-icon name="arrow-left" @click="back"/></van-col>
      <van-col span="16" class="tc">{{ filmName }}</van-col>
      <van-col span="6" class="right" @click="search"
        ><van-icon name="search"
      /></van-col>
    </van-row>
    <div class="center">
      <div class="left">
        <ul>
          <li
            v-for="(item, index) in datalist"
            :key="index"
            @click="dayfn(index, item.showdate)"
            :class="{ click: num === index }"
          >
            {{ item.showdate | time }}
          </li>
        </ul>
      </div>
      <div class="right"><van-icon name="arrow-down" /></div>
    </div>
    <div class="buttom">
      <div class="cinemalist" v-for="(cinemae, index) in cinemaes" :key="index" @click="cinemaId({cinemae, route})">
        <i>{{ cinemae.cinemaName }}</i>
        <p>{{ cinemae.cinemaAdd }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
import { Row, Col, Icon } from 'vant'
import axios from 'axios'
Vue.use(Row)
  .use(Col)
  .use(Icon)
export default {
  data () {
    return {
      datalist: [],
      num: 0,
      cinemaes: []
    }
  },
  methods: {
    ...mapMutations(['cinemaId']),
    back () {
      this.$router.go(-1)
    },
    route () {
      this.$router.push('/lovev/buyOnline')
    },
    search () {
      this.$router.push('/search')
    },
    dayfn (index, time) {
      this.num = index
      axios
        .post(
          '/api/mta-service/data/migu/validCinemaes.jsp',
          {
            cityCode: this.cityCode,
            filmId: this.filmId,
            showDate: time,
            orderType: 1,
            regionCode: '',
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
        .then(list => {
          this.cinemaes = list.data.cinemaes
        })
    }
  },
  created () {
    axios
      .post(
        '/api/mta-service/data/migu/filmShowdates.jsp',
        {
          cityCode: 4900,
          filmId: 53278,
          regionCode: ''
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
        res.data.showdates.lenght = 4
        this.datalist = res.data.showdates
        axios
          .post(
            '/api/mta-service/data/migu/validCinemaes.jsp',
            {
              cityCode: this.cityCode,
              filmId: this.filmId,
              showDate: this.datalist[0].showdate,
              orderType: 1,
              regionCode: '',
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
          .then(list => {
            this.cinemaes = list.data.cinemaes
          })
      })
  },
  filters: {
    time (val) {
      var arr = val.split('-')
      let week = new Date(arr.join('/')).getDay()
      let weekarr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      week = weekarr[week]
      arr.shift()
      let str = arr.join('-')
      return str + ' ' + week
    }
  },
  computed: {
    ...mapState(['filmId']),
    ...mapState(['filmName']),
    ...mapState(['cityCode'])
  }
}
</script>

<style lang="scss">
.buy {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .top {
    box-sizing: border-box;
    padding: 0 10px;
    height: 44px;
    line-height: 44px;
    font-size: 20px;
    color: #666;
    .tc {
      text-align: center;
      font-size: 18px;
    }
    .right {
      text-align: right;
    }
  }
  .center {
    height: 42px;
    display: flex;
    border-top: 1px solid #e6e6e6;
    .left {
      width: 330px;
      overflow-x: auto;
      &::-webkit-scrollbar {display:none}
      ul{
      display: -webkit-box;
      height: 100%;
      }
      li {
        width: 84px;
        height: 100%;
        text-align: center;
        box-sizing: border-box;
        line-height: 42px;
        font-size: 14px;
      }
      .click {
        color: #f74444;
        border-bottom: 2px solid #f74444;
      }
    }
    .right {
      flex: 1;
      text-align: center;
      font-size: 22px;
      color: #666;
      line-height: 42px;
    }
  }
  .buttom {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    .cinemalist {
      height: 74px;
      padding: 10px 12px 10px;
      border-bottom: 1px solid #e7e7e7;
      box-sizing: border-box;
      position: relative;
      i {
        line-height: 30px;
        font-size: 16px;
        color: #666;
      }
      p {
        line-height: 27px;
        width: 70%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 13px;
        color: #000;
      }
    }
  }
}
</style>
