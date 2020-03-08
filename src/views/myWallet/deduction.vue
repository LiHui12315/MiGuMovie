<template>
  <div class="lovev-deduction">
    <!-- 抵值券 -->
      <ipts
      ps='添加票卷'
      spans='兑换'
      values='请输入票卷兑换码'></ipts>
      <imgs></imgs>
  </div>
</template>

<script>
import ipts from './ipts'
import imgs from './imgs'
export default {
  name: 'deduction',
  components: {
    ipts,
    imgs
  }
}
</script>

<style lang='scss'>
  .lovev-deduction{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
