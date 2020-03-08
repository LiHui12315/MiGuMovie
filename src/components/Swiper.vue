<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item ,index) in slides" :key="index">
        <img :src="'http://movie.miguvideo.com/publish'+item.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'LvSwiper',
  props: {
    slides: {
      type: Array,
      default () {
        return []
      }
    },
    effect: {
      type: String,
      default () {
        return ''
      }
    },
    centeredSlides: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    slides () {
      this.$nextTick(() => {
        this.mySwiper.update()
      })
    }
  },

  mounted () {
    this.mySwiper = new Swiper(this.$el, {
      effect: this.effect,
      slidesPerView: 2,
      centeredSlides: this.centeredSlides,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }
    })
  }
}
</script>

<style lang="scss"></style>
