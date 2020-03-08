<template>
  <div class="wonderfulFilm">
    <div>
      <van-row type="flex" justify="space-between" class="top">
        <van-col span="6" class="left"><van-icon name="arrow-left" @click="back"/></van-col>
        <van-col span="16" class="tc">精彩影评</van-col>
        <van-col span="6" class="right"></van-col>
      </van-row>
    </div>
    <div class="talk">
      <div class="user" v-for="(item, index) in list" :key="index">
        <div class="utop">
          <div class="div1"></div>
          <div class="div2">{{item.username}}</div>
        </div>
        <p>{{ item.body }}</p>
        <div class="buttom">
          <span>{{ item.createdAt | time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Row, Col, Icon } from 'vant'
Vue.use(Row)
  .use(Col)
  .use(Icon)

export default {
  created () {
    axios.post('http://193.112.67.75:3000/text/show').then(res => {
      this.list = res.data.reverse()
    })
  },
  data () {
    return {
      list: []
    }
  },
  filters: {
    time (val) {
      return val.split('T')[0]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.wonderfulFilm {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .top {
    height: 44px;
    padding: 0 10px;
    background: #f9f9f9;
    line-height: 44px;
    border-bottom: 1px solid #e6e6e6;
    .left {
      font-size: 16px;
    }
    .tc {
      text-align: center;
      font-size: 16px;
    }
  }
  .talk {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    background: #EFEFEF;
    .user {
      padding: 0 15px;
      margin-bottom: 10px;
      background: #fff;
      .utop {
        height: 52px;
        display: flex;
        line-height: 52px;
        .div1 {
          background-image: url('/img/d-tou.png');
          background-size: 100% 100%;
          width: 30px;
          height: 30px;
          margin-top: 11px;
          margin-right: 20px;
        }
        .div2 {
          color: red;
          font-size: 14px;
        }
      }
      p {
        font-size: 14px;
        line-height: 20px;
        color: #666;
        width: 100%;
        word-wrap: break-word;
      }
      .buttom {
        line-height: 40px;
        height: 40px;
        display: flex;
        span {
          font-size: 12px;
          color: #888;
        }
      }
    }
  }
}
</style>
