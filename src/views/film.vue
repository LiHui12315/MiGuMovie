<template>
  <div class="film" v-if="many">
    <div class="imgbox">
      <van-icon name="arrow-left" class="back" @click="back" />
      <img :src="`http://movie.miguvideo.com/${many.imgSrc1}`" alt="" />
    </div>
    <div class="synopsis">
      <div class="top">
        <div class="left">
          <img :src="`http://movie.miguvideo.com/${many.imgShare}`" alt="">
        </div>
        <div class="right">
          <b>{{ many.name }}</b>
          <div class="good">
            <van-icon name="star" class="star" />
            <template>
              <van-icon name="star" class="star" v-if="many.score>2" />
              <van-icon name="star-o" class="star" v-else />
            </template>
            <template>
              <van-icon name="star" class="star" v-if="many.score>4" />
              <van-icon name="star-o" class="star" v-else />
            </template>
            <template>
              <van-icon name="star" class="star" v-if="many.score>6" />
              <van-icon name="star-o" class="star" v-else />
            </template>
            <template>
              <van-icon name="star" class="star" v-if="many.score>8" />
              <van-icon name="star-o" class="star" v-else />
            </template>
            <span>{{ many.score }}</span>
          </div>
          <p>{{ many.DetailType }}</p>
          <p>{{ many.region }}</p>
          <p>{{ many.time }}</p>
        </div>
      </div>
      <div class="bottom">
        <p :class="{auto: bool}">{{ many.describe }}</p>
        <div class="la">
          <van-icon name="arrow-down" v-if="!bool" @click="bool=!bool" />
          <van-icon name="arrow-up" v-else @click="bool=!bool" />
        </div>
      </div>
    </div>
    <div class="personnel margintop-10">
      <div class="top">
        <span>演职人员</span>
        <van-icon name="arrow" />
      </div>
      <div class="bottom">
        <div class="item" v-for="(item, index) in many.personnel" :key="index">
          <img :src="`http://movie.miguvideo.com/${item.imgSrc}`" alt="">
          <div class="one">{{ item.name }}</div>
          <template>
            <div v-if="item.player==1">导演</div>
            <div v-else>主演</div>
          </template>
        </div>
      </div>
    </div>
    <div class="poster margintop-10">
      <div class="top">
        <span>视频和剧照</span>
        <van-icon name="arrow" />
      </div>
      <div class="bottom">
        <img :src="`http://movie.miguvideo.com/${item.bigimg}`" alt="" v-for="(item,index) in many.poster" :key="index">
      </div>
    </div>
    <div class="comments margintop-10">
      <div class="top">
        <span>精彩评论</span>
        <van-icon name="arrow" @click="$router.push('/wonderfulFilm')" />
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
    <div class="recommend margintop-10">
      <div class="top">
        <span>推荐电影</span>
      </div>
      <div class="bottom">
        <div class="tui" v-for="(item, index) in tui" :key="index" @click="hah(item.contid)">
          <img :src="`http://movie.miguvideo.com/${item.imgSrc}`" alt="">
          <div class="one">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="flexd">
      <van-row class="bottom">
        <van-col span="6" class="left"><van-icon name="star-o" size="20" class="font" />收藏</van-col>
        <van-col span="6" class="left" @click="write"><van-icon name="notes-o" size="20" class="font" />写影评</van-col>
        <van-col span="12" class="right">敬请期待</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Icon, Row, Col } from 'vant'
Vue.use(Icon).use(Row).use(Col)
export default {
  filters: {
    time (val) {
      return val.split('T')[0]
    }
  },
  data () {
    return {
      many: '',
      bool: false,
      list: [],
      tui: [],
      id: this.$route.params.id
    }
  },
  created () {
    axios.get(`/api/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=${this.id}`).then(res => {
      let many = res.data[0]
      this.many = many
    })
    axios.post('/api/publish/i_www/resource/lovev/miguMovie/detail/relevant_data2.jsp').then(res => {
      this.tui = res.data
    })
    axios.post('http://193.112.67.75:3000/text/show').then(res => {
      this.list = []
      this.list.push(res.data.reverse()[0])
      this.list.push(res.data.reverse()[1])
    })
  },
  methods: {
    write () {
      this.$router.push('/comment')
    },
    back () {
      this.$router.go(-1)
    },
    hah (data) {
      this.$router.push(`/film/${data}`)
    }
  },
  beforeRouteUpdate (to, from, next) {
    setTimeout(() => {
      axios.get(`/api/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp?cid=${this.$route.params.id}`).then(res => {
        let many = res.data[0]
        this.many = many
      })
      axios.post('/api/publish/i_www/resource/lovev/miguMovie/detail/relevant_data2.jsp').then(res => {
        this.tui = res.data
      })
      axios.post('http://193.112.67.75:3000/text/show').then(res => {
        this.list = []
        this.list.push(res.data.reverse()[0])
        this.list.push(res.data.reverse()[1])
      })
    })
    next()
  }
}
</script>

<style lang='scss'>
.film{
  background: #f0f0f0;
  width: 100%;
  .one{
    word-break:keep-all;    /* 不换行 */
    white-space:nowrap;     /* 不换行 */
    overflow:hidden;
  }
  .margintop-10{
    margin-top: 10px;
  }
  .top{
    padding:10px 10px 10px 0;
    height: 42px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    &::before{
      display: inline-block;
      content: "";
      position: absolute;
      width: 3px;
      height: 17px;
      background-color: #F64A5F;
      top: 11px;
      left: 0;
    }
    span{
      margin-left: 10px;
    }
  }
  .imgbox{
    height: 220px;
    width: 100%;
    position: relative;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .synopsis{
    background: #fff;
    padding: 0 10px;
    margin-top: -75px;
    .top{
      height: 148px;
      width: 100%;
      display: flex;
      .left{
        width: 96px;
        height: 143px;
        img{
          widows: 100%;
          height: 100%;
        }
      }
      .right{
        flex: 1;
        box-sizing: border-box;
        padding-left: 10px;
        padding-top: 20px;
        b{
          font-size: 18px;
          color: #fff;
        }
        .good{
          display: flex;
          padding-top: 12px;
          .star{
            color: #F8B246;
            font-size: 12px;
          }
          span{
            font-size: 14px;
            color: #F8B246;
            margin-left: 4px;
          }
        }
        p{
          font-size: 13px;
          margin-top: 10px;
        }
      }
    }
    .bottom{
      p{
        font-size: 14px;
        color: #666;
        margin-top: 19px;
        width: 100%;
        line-height: 18px;
        height: 57px;
        overflow: hidden;
      }
      .auto{
        height: auto;
      }
      .la{
        line-height: 20px;
        font-size: 14px;
        text-align: center;
      }
    }
  }
  .personnel{
    width: 100%;
    height: 214px;
    background: #fff;
    .top{
      padding:10px 10px 10px 0;
      height: 42px;
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      &::before{
        display: inline-block;
        content: "";
        position: absolute;
        width: 3px;
        height: 17px;
        background-color: #F64A5F;
        top: 11px;
        left: 0;
      }
      span{
        margin-left: 10px;
      }
    }
    .bottom{
      display: flex;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      &::-webkit-scrollbar {display:none}
      .item{
        width: 93.75px;
        margin-right: 1px;
        flex-shrink: 0;
        img{
          width: 100%;
          height: 124px;
          display: block;
          margin-bottom: 5px;
        }
        div{
          font-size: 13px;
          color: #4d4d4d;
          text-align: center;
          line-height: 18px;
        }
      }
    }
  }
  .poster{
    height: 104px;
    width: 100%;
    background: #fff;
    .bottom{
      height: 62px;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      &::-webkit-scrollbar {display:none}
      img{
        display: block;
        height: 100%;
        width: 92.75px;
        margin-right: 1px;
        flex-shrink: 0;
      }
    }
  }
  .comments{
    width: 100%;
    background: #fff;
    .talk {
      width: 100%;
      .user {
        padding: 0 15px;
        background: #fff;
        border-bottom: 1px solid #e6e6e6;
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
  .recommend{
    background: #fff;
    height: 270px;
    .bottom{
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      &::-webkit-scrollbar {display:none}
      .tui{
        flex-shrink: 0;
        width: 92.75px;
        margin-right: 1px;
        img{
          height: 140px;
          width: 92.75px;
          display: block;
        }
        div{
          text-align: center;
          font-size: 13px;
          color: #666;
          padding: 6px 5px 11px;
        }
      }
    }
  }
  .flexd{
    height: 42px;
    width: 100%;
    background: #fff;
    z-index: 100;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid  #e6e6e6;
    .font{
      position: relative;
      top: 3px;
    }
    .bottom{
      height: 100%;
      text-align: center;
      font-size: 13px;
      color: #3a3a3a;
      .left{
        height: 100%;
        line-height: 42px;
      }
      .right{
        height: 100%;
        line-height: 42px;
        background: #d3d3d3;
        color: #fff;
      }
    }
  }
  .back{
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 50%;
    background: #e6e6e6;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
}
</style>
