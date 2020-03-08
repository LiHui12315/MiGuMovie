<template>
  <div class="xhit">
    <filmItem1 v-for="item in filmList" :key="item.filmId" :xFilmInfo="item" ></filmItem1>
  </div>
</template>

<script>
import filmItem1 from '@/views/lovev/ticket/films/filmItem1'
import { getXFilmList1 } from '@/views/lovev/ticket/films/xfilms'

export default {
  data () {
    return {
      filmList: []
    }
  },
  components: {
    filmItem1
  },

  created () {
    getXFilmList1({
      cityCode: 4900
    }).then(response => {
      let res = response.data
      this.filmList = res.body.movieList
    })
  }
}
</script>

<style lang='scss'></style>
