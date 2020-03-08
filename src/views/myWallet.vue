<template>
  <div class="lovev">
    <div class="myWallet">
      <div class="myWallet-top" >
        <i class="iconfont icon-houtui" @click='goback'></i>
        <p>我的钱包</p>
      </div>
      <!-- 导航 -->
      <van-tabs v-model="active">
        <van-tab
        :title="item.title"
        v-for="(item,index) in tabs"
        :key='item.id'
        :id='item.id'
        :to='item.href'
        @click="fn2(index)"
        :class="{classed:index==cutre}"
        >
        </van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
Vue.use(Tab).use(Tabs)
export default {
  name: 'myWallet',
  data () {
    return {
      active: 1,
      cutre: 0,
      tabs: [
        {
          id: 1,
          title: '电影卡',
          name: '电影卡',
          href: '/myWallet/filmCoupon'
        },
        {
          id: 2,
          title: '抵值劵',
          name: '抵值劵',
          href: '/myWallet/deduction'
        },
        {
          id: 3,
          title: '兑换券',
          name: '兑换券',
          href: '/myWallet/coninCertificate'
        },
        {
          id: 4,
          title: '会员卡',
          name: '会员卡',
          href: '/myWallet/plus'
        }
      ]
    }
  },
  // 返回个人中心
  methods: {
    goback () {
      this.$router.push({
        path: '/lovev/self'
      })
    },
    fn2 (index) {
      console.log(1)
      this.cutre = index
    }
  },
  // 监听导航栏，点击跳转不同导航栏刷新不会改变
  watch: {
    $route: {
      handler (newVal) {
        // console.log(newVal)
        this.active = newVal.meta.inptsId
      },
      immediate: true
    }
  }
}
</script>

<style lang='scss'>
  .lovev{
    // 头部
    .myWallet-top{
      height: 45px;
      width: 100%;
      font-size: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      .iconfont{
        font-size: 24px;
        display: inline-block;
        color: #333;
        line-height: 45px;
        position: absolute;
        left:6px;
        top: 0px;
      }
      p{
        font-size: 17px;
        text-align: center;
      }
    }
  }

</style>
