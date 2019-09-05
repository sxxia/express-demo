const express = require('express');
const path = require('path');

// 创建中间件
const app = express();
// 用express提供的静态目录的中间件
// 换句话说，也就是加载public中的index.html文件， 它是一个本地文件
// app.use(express.static(path.join(__dirname, 'public')));

// 动态请求
app.get('/user', (req, res) => {
  res.send('I will send you user list later');
  res.end();
});

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
});