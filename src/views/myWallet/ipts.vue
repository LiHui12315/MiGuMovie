<template>
    <div class="lovev-top">
      <div class="top">
        <p>{{ps}}</p>
        <div class="collinear">
          <input type="text" class="ipt" :placeholder="values">
          <div class="red" @click="fn1">
            <span>{{spans}}</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  props: ['ps', 'values', 'spans'],
  value: '',
  a: '',
  methods: {
    fn1 () {
      Toast('请输入正确的电影卡卡密')
    }
  }
}
</script>

<style lang='scss'>
.lovev-top {
  display: flex;
  flex-direction: column;
  height: 90px;
  @media screen and (max-width: 320px) {
    width: 96%;
  }
  @media screen and (max-width: 375px) and (max-width: 414px) {
    width: 95%;
  }
  .top{
    p {
      font-size: 13px;
      color: #999;
      line-height: 26px;
    }
    .collinear {
      display: flex;
      justify-content: space-between;
      .ipt {
        color: #999;
        height: 32px;
        font-size: 14px;
        border: 0 none;
        background-color: #f0f0f0;
        border-radius: 3px;
        @media screen and (max-width: 320px) {
          width: 70%;
        }
        @media screen and (max-width: 375px) and (max-width: 414px) {
          width: 71%;
        }
      }

      .red {
        height: 33px;
        border-radius: 5px;
        background: #f74444;
        text-align: center;
        @media screen and (max-width: 320px) {
          width: 20.6%;
        }
        @media screen and (max-width: 375px) and (max-width: 414px) {
          width: 19%;
        }
        span {
          line-height: 33px;
        }
      }
    }
  }
}
</style>
