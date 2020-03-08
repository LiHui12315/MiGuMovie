<template>
  <div class="xcinemas">
    <h2>{{ xcinemaInfo.cinemaName }}</h2>
    <div class="xp">
      <p>{{ xcinemaInfo.cinemaAdd }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cinemaItem',
  props: {
    xcinemaInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.xcinemas{
  padding: 12px 12px 0;
  border-bottom: 1px solid #e7e7e7;
  height: 73px;
}

.xcinema h2{
  color: #666;
  font-size: 16px;
  display: inline-block;
  margin: 5px 0 10px 0;
  font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
}

.xp{
  width: 271px;
}

.xcinema p{
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
  color: #1a1a1a;
  font-size: 14px
}
</style>
