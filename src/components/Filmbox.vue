<template>
<div class="films">
  <h2 class="h2">{{title}}</h2>
      <div class="container">
          <div class="slide" v-for="(item ,index) in slides" :key="index" @click="go(item.cid)">
        <img :src="item.url" alt="" />
        <p class="font14">{{item.name}}</p>
        <p class="font13">{{item.content}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Filmbox',

  props: {
    title: {
      type: String,
      default () {
        return ''
      }
    },
    slides: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    go (id) {
      this.$router.push(`/film/${id}`)
    }
  }
}
</script>

<style lang="scss">
.h2{
  height: 45px;
  color:#666;
  font-size: 16px;
  position: relative;
  line-height: 45px;
  padding-left:8px;
  &::after{
    content: '';
    display: inline-block;
    width: 3px;
    height: 23px;
    position: absolute;
    left: 0;
    top: 10px;
    background: red;
  }
}
.container{
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar{
    display: none;
  }
}
.slide{
  width: 117px;
  img{
    width: 118px;
    height: 175px;
  }
  .font14{
    padding-left: 12px;
    line-height: 30px;
    font-size: 14px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .font13{
    padding-left: 12px;
    color:#999;
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
