<template>
  <div class="head">
    <div class="up">
      <div class="header">
        <div class="header_left">
          <a href="#">
            <i class="iconfont icon-qianbao"></i>
            <span>0 元</span>
          </a>
        </div>
        <div class="header_right">
          <a href="#">
            <i class="iconfont icon-dingshi"></i>
            <i class="iconfont icon-fangdajing"></i>
          </a>
        </div>
      </div>
      <div class="head_sort">
        <div class="head_sort_inner">
          <ul class="head_sort_left">
            <li
              v-for="(item, index) in sorts"
              :key="item.id"
              :class="['sout_li', { active: myValue === index }]"
              @click="myValue = index"
            >
              <a :href="item.to">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="head_sort_right">
          <router-link to="/">
            <i class="iconfont icon-tubiao-"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="down">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number
    }
  },
  data () {
    return {
      select: '推荐',
      sorts: [
        {
          id: 1,
          name: '推荐',
          to: '#/lovev/miguMovie/recommend'
        },
        {
          id: 2,
          name: '免费看片',
          to: '#/lovev/miguMovie/watchingFree'
        },
        {
          id: 3,
          name: '影单',
          to: '#/lovev/miguMovie/alone'
        },
        {
          id: 4,
          name: '小视频',
          to: '#/lovev/miguMovie/smallVideo'
        },
        {
          id: 5,
          name: '影评',
          to: '#/lovev/miguMovie/review'
        }
      ],
      myValue: this.value
    }
  }
  //  computed: {
  //    active {
  //      return this.myValue === this.value ? 'active' :''
  //    }
  //  }
}
</script>

<style lang="scss">
.header {
  padding: 8px 12px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  &_left a {
    color: #000;
    font-size: 14px;
    .icon-qianbao {
      color: #000;
      font-size: 20px;
    }
  }
  &_right a {
    .iconfont {
      font-size: 20px;
      color: #000;
    }
    .icon-dingshi {
      margin-right: 10px;
    }
  }
}
.head_sort {
  width: 100%;
  display: flex;
  height: 37px;
  line-height: 37px;
  font-size: 14px;
  &_left a {
    color: #1a1a1a;
    text-align: center;
    font-size: 14px;
  }
  justify-content: space-between;
  &_left {
    display: flex;
    .sout_li {
      width: 88.8889px;
      text-align: center;
      flex-shrink: 0;
      a {
        text-align: center;
      }
    }
    .active {
      box-sizing: border-box;
      line-height: 34px;
      border-bottom: 2px solid #f74444;
      color: #f74444;
    }
  }
  &_right a {
    width: 12%;
    padding-right: 10px;
    .icon-tubiao- {
      font-size: 20px;
    }
  }
}
.head_sort_inner {
  width: 88%;
  overflow-x: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
.head{
  display: flex;
  flex-direction: column;
  height: 100%;
  .down{
    flex: 1;
    overflow: auto;
  }
}
</style>
