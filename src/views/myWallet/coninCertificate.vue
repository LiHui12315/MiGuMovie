<template>
  <div class="lovev-coninCertificate">
    <!-- 兑换券页 -->
      <ipts
      ps='添加新的兑换券'
      spans='添加'
      values='请输入兑换券密码进行兑换'
      ></ipts>
      <div class="box">
        <p>*部分影院的4D影厅，VIP影厅放映的影片，不可用兑换券兑换影票</p>
        <span>
          *万达兑换券不支持春节、平安夜(12.24)、情人节(2.14)等影城规定
          的特殊节假日场次，不支持首映式、VIP等特殊场次；仅限同类万
          达兑换券同时支付一笔订单，不可与其他卡劵、支付方式混合支付
        </span>
      </div>
      <imgs></imgs>
  </div>
</template>

<script>
import ipts from './ipts'
import imgs from './imgs'
export default {
  name: 'coninCertificate',
  components: {
    ipts,
    imgs
  }
}
</script>

<style lang='scss'>
  .lovev-coninCertificate{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color:#999;
    line-height: 20px;
    .box{
      @media screen and (max-width: 320px) {
        width: 94%;
      }
      @media screen and (max-width: 375px) and (max-width: 414px) {
        width: 94%;
      }
    }
  }
</style>
