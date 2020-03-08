<template>
  <div class="xsoon">
    <filmItem v-for="item in filmList" :key="item.filmId" :xFilmInfo="item" ></filmItem>
  </div>
</template>

<script>
import filmItem from '@/views/lovev/ticket/films/filmItem'
import { getXFilmList2 } from '@/views/lovev/ticket/films/xfilms'

export default {
  data () {
    return {
      filmList: []
    }
  },
  components: {
    filmItem
  },

  created () {
    getXFilmList2({
      pageNo: 0,
      pageSize: 20
    }).then(response => {
      let res = response.data
      this.filmList = res.body.movieList
    })
  }
}
</script>

<style lang='scss'></style>
