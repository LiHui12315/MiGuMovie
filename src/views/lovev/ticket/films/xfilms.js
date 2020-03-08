// 自己做的一个接口文件
import axios from 'axios'

const getXFilmList1 = (params) => {
  return axios.get('/api/mgw/bsdata4mv/v2/movieListShow/4708', {
    params
  })
}

const getXFilmList2 = (params) => {
  return axios.get('/api/mgw/bsdata4mv/v2/movieListPreview', {
    params
  })
}

export {
  getXFilmList1,
  getXFilmList2
}
