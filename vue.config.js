// 当前项目的一些配置设置，可以设置 webpack 、多页面、正向代理、

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://movie.miguvideo.com',
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}

// localhost:8080
// http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp

// localhost:8080 -> localhost:8080/lovev/miguMovie/data/seeFilmData.jsp -> http://movie.miguvideo.com/lovev/miguMovie/data/seeFilmData.jsp
