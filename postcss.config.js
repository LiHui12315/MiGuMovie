module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 基准值 1rem = 37.5px
      propList: ['*']
    }
  }
}
