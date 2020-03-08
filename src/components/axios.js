let getFilmList = function (axios, paylod) {
  return axios
    .post(
      '/api/lovev/miguMovie/data/seeFilmData.jsp',
      paylod,
      {
        transformRequest (data) {
          let arr = []
          for (let key in data) {
            arr.push(`${key}=${data[key]}`)
          }
          return arr.join('&')
        }
      }
    )
}

export default getFilmList
