const mongose = require('./../conf/db')
// 建立一个user的表格
let schema = new mongose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
const user = mongose.model('user', schema)
module.exports = user
