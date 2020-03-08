const express = require('express')
const User = require('./module/user.js')
const Text = require('./module/text.js')
const bcryptjs = require('bcryptjs')
let server = express()
server.use(express.json())
server.use(express.urlencoded({
  extended: true
}))

server.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'content-type')
  next()
})

// 注册
server.post('/user/add', async (req, res) => {
  let body = req.body
  let many = await User.find()
  let bool = false
  many.forEach((a) => {
    if (body.username === a.username) {
      res.send({
        code: 0,
        msg: '用户名被注册'
      })
      bool = true
    }
  })
  if (bool) {
    return
  }
  let post = new User({
    username: body.username,
    password: await bcryptjs.hash(body.password, 12)
  })

  try {
    await post.save()
    res.send({
      code: 1,
      msg: '注册成功'
    })
  } catch (error) {
    res.send({
      code: 0,
      msg: '注册失败'
    })
  }
})

// 登陆
server.post('/user/login', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  let bool = false
  let body = req.body
  let a = await User.findOne({
    username: body.username
  })
  if (a) {
    bool = await bcryptjs.compare(req.body.password, a.password)
  }
  if (bool) {
    let obj = {
      code: 1,
      msg: '登陆成功'
    }
    res.send(obj)
  } else {
    let obj = {
      code: 0,
      msg: '用户名或密码错误'
    }
    res.send(obj)
  }
})

// 添加文章
server.post('/text/add', async (req, res) => {
  let body = req.body
  let post = new Text({
    username: body.username,
    body: body.body
  })
  try {
    await post.save()
    res.send({
      code: 1,
      msg: '发表成功'
    })
  } catch (error) {
    res.send({
      code: 0,
      msg: '发表失败'
    })
  }
})

// 获取文章
server.post('/text/show', async (req, res) => {
  let all = await Text.find()
  res.send(all)
})

server.listen(3000)

/* 接口 :
    登陆：10.36.147.165:3000/user/login
        请求方式 : post
            参数: username  用户名
                  password  密码
                  返回值  {
                            code:1 || 0,
                            msg:'登陆成功' || '登陆失败'
                        }

    注册：10.36.147.165:3000/user/add
        请求方式 : post
            参数: username  用户名
                  password  密码

                  返回值{
                      code: 1 || 0
                      msg: '注册成功' || '注册失败' || '用户名被注册'
                  }
*/
