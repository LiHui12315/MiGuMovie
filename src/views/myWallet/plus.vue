<template>
  <div class="lovev-plus">
    <!-- 会员卡页 -->
    <div class="top">
      <p>还未开通蘑菇联合会员卡</p>
      <span>开通后购片可以享受优惠价</span>
    </div>
    <img src="../../../public/img/flemcode/w_3.jpg" alt="" class="img-3">
    <img src="../../../public/img/flemcode/w_10.png" alt="" class="img-10">
    <div class="foot">
      <p>-每月一次9.9购票优惠</p>
      <span>-每月送30元咪咕影院在线观影券</span>
      <strong>￥20</strong>
      <dd>更多影城卡即将上线</dd>
    </div>
  </div>
</template>

<script>
export default {
  name: 'plus'
}
</script>

<style lang='scss'>
  .lovev-plus{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0px;
    overflow: hidden;
    .top{
      height: 135px;
      background: #dedcdc;
      color: #fff;
      text-align: center;
      @media screen and (max-width: 320px) {
        width: 94%;
      }
       @media screen and (max-width: 375px) and (max-width: 414px) {
        width: 94%;
      }
      p{
        font-size: 16px;
        margin: 48px 0 1px 0;
      }
      span{
        font-size: 14px;
        text-align: center;
      }
    }

    .img-3{
      height: 12.6px;
      margin: 10px 0px;
      @media screen and (max-width: 320px) {
        width: 94%;
      }
      @media screen and (max-width: 375px) and (max-width: 414px) {
        width: 94%;
      }
    }
    .img-10{
      height: 135px;
      @media screen and (max-width: 320px) {
        width: 94%;
      }
      @media screen and (max-width: 375px) and (max-width: 414px) {
        width: 94%;
      }
    }

    .foot{
      width: 389px;
      height: 100px;
      margin-top: -63px;
      color:#fff;
      line-height: 12px;
      align-items: center;

      p{
        font-size: 12px;
        text-align: left;
        padding-left: 20px;
        line-height: 24px;
      }

      span{
        font-size: 12px;
        text-align: left;
        padding-left: 20px;
      }

      strong{
        font-size: 16px;
        padding-left: 140px;
      }

      dd{
        font-size: 18px;
        color:#999;
        text-align: center;
        line-height: 613%;
      }
    }
  }
</style>
