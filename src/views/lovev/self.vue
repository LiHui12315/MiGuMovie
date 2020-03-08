<template>
  <div class="xself">
    <div class="x-box11">
      <van-cell class="x-aa" title="我的">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-icon
          slot="right-icon"
          name="setting-o"
          style="line-height: inherit;"
        />
      </van-cell>
    </div>
    <div class="x-box22">
      <div class="x-box221">
        <van-image
          round
          width="56px"
          height="56px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="x-box222">
        <van-cell v-if="username" :title="username" is-link :border="false"/>
        <van-cell v-else title="点击登录" is-link to="/login" :border="false"/>
      </div>
    </div>
    <div class="x-box33">
      <van-cell v-if="username" icon="add-square" color="#ddd" title="我的订单" is-link to="/myOrder" />
      <van-cell v-else icon="add-square" color="#ddd" title="我的订单" is-link to="/login" />
      <van-cell v-if="username" icon="gold-coin" title="我的钱包" is-link to="/myWallet" value="电影卡 票券 权益 积分"/>
      <van-cell v-else icon="gold-coin" title="我的钱包" is-link to="/login" value="电影卡 票券 权益 积分"/>
    </div>
    <div class="x-box44">
      <van-cell icon="question" title="常见问题" is-link />
      <van-cell icon="phone-circle" title="在线客服" is-link />
    </div>
    <div class="x-box55">
      <van-cell icon="bag" title="商城" is-link />
      <van-cell icon="send-gift" title="约票" is-link />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Cell, CellGroup, Icon, Image } from 'vant'

Vue.use(Cell).use(CellGroup).use(Icon).use(Image)

export default {
  computed: {
    ...mapState(['username'])
  }
}
</script>

<style lang='scss'>
  .x-box11{
    height: 43px;
    padding: 0 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .x-box22{
    height: 56px;
    padding: 20px 10px;
    border-bottom: 10px solid #f0f0f0;
  }
  .x-box33{
    height: 82px;
    margin-top: 10px;
    padding: 0 10px;
    border-bottom: 10px solid #f0f0f0;
  }
  .x-box44{
    height: 82px;
    margin-top: 20px;
    padding: 0 10px;
    border-bottom: 10px solid #f0f0f0;
  }
  .x-box55{
    height: 82px;
    margin-top: 20px;
    padding: 0 10px;
  }
  .van-cell{
    border-bottom: 1px solid #dbdbdb;
    padding: 8px 0px;
  }
  .van-icon-add-square{
    color: #ffa325
  }
  .van-icon-gold-coin{
    color: #ffcb23
  }
  .van-icon-question{
    color: #80d092
  }
  .van-icon-phone-circle{
    color: #ffcb23
  }
  .van-icon-bag{
    color: #6bbce9
  }
  .van-icon-send-gift{
    color: #ffbdbd
  }
  .van-cell--clickable{
    border: none
  }
  .x-aa{
    text-align: center;
    border: none;
    font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
    font-size: 17px
  }
  .x-box22{
    display: flex
  }
  .x-box221{
    float: left;
    margin-right: 15px
  }
  .x-box222{
    float: left;
    flex: 1
  }
</style>
