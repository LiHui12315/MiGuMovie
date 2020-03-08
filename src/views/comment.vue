<template>
  <div class="comment">
    <van-row type="flex" justify="space-between" class="top">
      <van-col span="6" class="left"
        ><van-icon name="arrow-left" @click="back"
      /></van-col>
      <van-col span="16" class="tc">发评论</van-col>
      <van-col span="6" class="right"></van-col>
    </van-row>
    <div class="center">
      <textarea
        placeholder="写下你的评论吧~"
        class="txt"
        maxlength="168"
        v-model="txt"
      ></textarea>
      <span>{{ num }}</span>
    </div>
    <div class="bottom">
      <div class="send" @click="send">发布评论</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import Vue from 'vue'
import { Row, Col, Icon } from 'vant'
Vue.use(Row)
  .use(Col)
  .use(Icon)

export default {
  data () {
    return {
      txt: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    send () {
      axios
        .post('http://193.112.67.75:3000/text/add', {
          username: this.username,
          body: this.txt
        })
        .then(res => {
          this.txt = ''
          console.log(res)
        })
    }
  },
  computed: {
    num () {
      return 168 - this.txt.length
    },
    ...mapState(['username'])
  }
}
</script>

<style lang="scss">
.comment {
  height: 100%;
  width: 100%;
  background: #f7f7f7;
  .top {
    height: 44px;
    background: #f9f9f9;
    padding: 0 10px;
    line-height: 44px;
    .left {
      font-size: 16px;
    }
    .tc {
      text-align: center;
      font-size: 16px;
    }
  }
  .center {
    position: relative;
    width: 100%;
    .txt {
      width: 100%;
      height: 300px;
      box-sizing: border-box;
      resize: none;
      border: 0;
    }
    span {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-around;
  }
  .send {
    width: 100px;
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    color: #fff;
    background: #ff5c38;
    border-radius: 16px;
    text-align: center;
  }
}
</style>
