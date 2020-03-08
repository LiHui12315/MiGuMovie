const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/express'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('连接成功')
}).catch(error => {
  console.log(error)
})
module.exports = mongoose
