const mongose = require('./../conf/db')
// 建立一个user的表格
let schema = new mongose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)
const text = mongose.model('text', schema)
module.exports = text
