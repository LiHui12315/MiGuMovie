<template>
  <div class="lovev">
    <div class="lovev_view">
      <router-view></router-view>
    </div>
    <div class="bottom">
      <van-tabbar v-model="active" class="bottom_tabber" active-color="#f74444">
        <van-tabbar-item
          :to="item.to"
          v-for="item in tabs"
          :key="item.id"
          :name="item.name"
        >
          <span>{{ item.name }}</span>
          <i slot="icon" :class="['iconfont', item.icon]"
        /></van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Tabbar,
  TabbarItem
} from 'vant'
Vue.use(Tabbar).use(TabbarItem)
export default {
  data () {
    return {
      active: this.$route.meta.footer || '看片',
      tabs: [
        {
          id: 1,
          name: '看片',
          icon: 'icon-dianying',
          to: '/lovev/miguMovie'
        },
        {
          id: 2,
          name: '购票',
          icon: 'icon-goupiao',
          to: '/lovev/ticket'
        },
        {
          id: 3,
          name: '我的',
          icon: 'icon-wode',
          to: '/lovev/self'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.lovev {
  display: flex;
  flex-direction: column;
  height: 100%;
  &_view {
    flex: 1;
    overflow-y: auto;
  }
  .bottom{
    height: 50px;
  }
  .bottom_tabber {
    height: 50px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    .light {
      color: #f74444;
    }
    span {
      font-size: 10px;
    }
    .iconfont {
      font-size: 24px;
    }
  }
}
</style>
