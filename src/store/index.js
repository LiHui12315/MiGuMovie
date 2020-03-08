import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmId: localStorage.getItem('filmId') || '',
    cityCode: 4900,
    filmName: localStorage.getItem('filmName') || '',
    cinemae: JSON.parse(localStorage.getItem('cinemaName')) || {},
    titcks: JSON.parse(localStorage.getItem('titckspush')) || [],
    username: localStorage.getItem('username') || ''
  },
  mutations: {
    // xFilmId (state, a) {
    //   console.log(a)
    //   state.filmId = a
    //   localStorage.setItem('filmId', a)
    // },
    // xFilmName (state, a) {
    //   console.log(a)
    //   state.filmName = a
    //   localStorage.setItem('filmName', a)
    // },

    // xFilmId (state, obj) {
    //   console.log(obj)
    //   state.filmId = obj.filmId
    //   localStorage.setItem('filmId', obj.filmId)
    //   state.filmName = obj.filmName
    //   localStorage.setItem('filmName', obj.filmName)
    // },

    xFilmId (state, obj) {
      console.log(obj)
      state.filmId = obj.filmId
      localStorage.setItem('filmId', obj.filmId)
      state.filmName = obj.filmName
      localStorage.setItem('filmName', obj.filmName)
    },
    cinemaId (state, obj) {
      localStorage.setItem('cinemaName', JSON.stringify(obj.cinemae))
      state.cinemae = obj.cinemae
      obj.route()
    },
    titckspush (state, obj) {
      if (localStorage.getItem('titckspush')) {
        let arr = JSON.parse(localStorage.getItem('titckspush'))
        arr.push(obj)
        localStorage.setItem('titckspush', JSON.stringify(arr))
      } else {
        localStorage.setItem('titckspush', JSON.stringify([obj]))
        state.titcks.push(obj)
      }
    },
    username (state, username) {
      console.log(111)
      localStorage.setItem('username', username)
      state.username = username
    }
  },
  actions: {},
  modules: {}
})
