<template>
  <div class="addlogin">
    <div class="top">
      <i class="iconfont icon-zuo" @click="back"></i>
      <p>账密登陆</p>
    </div>
    <div class="mging">
      <img src="/img/d-mg.png" alt="" />
    </div>
    <div class="center">
      <div>
        <input type="text" class="name" placeholder="账号" v-model="name" />
        <span v-show="name" @click="fn1">×</span>
      </div>
      <div>
        <input type="password" class="word" placeholder="密码" v-model="word" />
        <span v-show="word" @click="fn2">×</span>
      </div>
      <input type="button" @click="login" class="button" value="登陆" />
    </div>
    <div class="buttom">
      <img src="/img/d-yd.png" alt="" />
    </div>
    <router-link to="/add" class="go" @click="add">没有账号？注册一个吧</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      word: ''
    }
  },
  methods: {
    ...mapMutations(['username']),
    add () {
      this.$router.push('/add')
    },
    fn1 () {
      this.name = ''
    },
    back () {
      this.$router.go(-1)
    },
    fn2 () {
      this.word = ''
    },
    login () {
      axios
        .post('http://193.112.67.75:3000/user/login', {
          username: this.name,
          password: this.word
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 1) {
            this.$router.push('/lovev/self')
          } else {
            alert('登陆失败')
          }
          this.username(this.name)
        })
    }
  }
}
</script>

<style lang="scss">
.addlogin {
  width: 100%;
  height: 100%;
  .top {
    height: 44px;
    line-height: 44px;
    display: flex;
    padding: 0 10px;
    position: relative;
    ::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      transform: scaley(0.3);
      bottom: 0;
      left: 0;
      background: #999;
    }
    p {
      margin-left: 130px;
      font-size: 20px;
    }
  }
  .mging {
    display: flex;
    justify-content: space-around;
    height: 94px;
    align-items: center;
    img {
      height: 34px;
      width: 138px;
    }
  }
  .center {
    height: 182px;
    margin-top: 8px;
    width: 100%;
    input {
      height: 40px;
      margin: 10px auto 0;
      width: 343px;
      display: block;
      border: 0;
      border-bottom: 1px solid #d1d1d1;
      box-sizing: border-box;
      padding: 0 10px;
      outline: none;
    }
    div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span {
        height: 16px;
        width: 16px;
        position: absolute;
        background: #d6d6d6;
        color: #fff;
        right: 40px;
        border-radius: 50%;
        font-size: 12px;
        text-align: center;
        line-height: 16px;
      }
    }
    .button {
      margin-top: 30px;
      background: #2e8fd7;
      border-radius: 22px;
      height: 44px;
      color: #fff;
      font-size: 18px;
    }
  }
  .buttom {
    position: absolute;
    bottom: 16px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    img{
      height: 30px;
      width: 30px;
    }
  }
  .go{
    font-size: 12px;
    color: #2e8fd7;
    margin-left: 15px;
  }
}
</style>
