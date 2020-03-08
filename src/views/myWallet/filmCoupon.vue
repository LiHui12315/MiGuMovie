<template>
  <div class="lovev-filmCode">
    <ipts
    ps='添加新电影卡'
    spans='兑换'
    values='请输入电影卡兑换码'
     ></ipts>
      <div class="box">
        <p>还未购买电影卡</p>
        <span>购买电影卡享更多优惠券</span>
        <div class="bigbox">
            <div class="buyitnow">
              <span>立即购买</span>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import ipts from './ipts'
export default {
  name: 'filmCoupon',
  components: {
    ipts
  }
}
</script>

<style lang="scss">
.lovev-filmCode {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .box {
    height: 173px;
    background: #f0f0f0;
    text-align: center;
    @media screen and (max-width: 320px) {
      width: 96%;
    }
    @media screen and (max-width: 375px) and (max-width: 414px) {
      width: 95%;
    }
    p {
      color: #666;
      font-weight: bold;
      font-size: 18px;
      padding: 30px 0 10px 0;
    }
    span {
      font-size: 13px;
      color: #999;
    }
    .bigbox {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .buyitnow {
        height: 37px;
        background: #f74444;
        border-radius: 20px;
        align-items: center;
        margin-top: 1%;
        @media screen and (max-width: 320px) {
          width: 42%;
        }
        @media screen and (max-width: 375px) and (max-width: 414px) {
          width: 35%;
        }
        span {
          text-align: center;
          line-height: 37px;
          color: #fff;
        }
      }
    }
  }
}
</style>
