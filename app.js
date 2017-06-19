const http = require('http')

const homePage = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <title>Nodejs 部署上线示例（随时失效）</title>
    <style type="text/css">
      * {
        padding: 0;
        margin: 0;
      }

      body {
        padding: 30px 0;
        text-align: center;
        font-size: 16px;
        background-color: #333;
      }

      h1,
      h2 {
        color: #fff;
      }

      nav {
        margin-top: 20px;
      }

      a {
        color: #ccc;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <h1>埋点系统开发test_02</h1>
    <h2>通过PM2从本地部署到上线</h2>
    <nav>
      <ul>
        <li>
          <a target="_blank" href="/a">增加埋点</a>
        </li>
        <li>
          <a target="_blank" href="/b">删除埋点</a>
        </li>
        <li>
          <a target="_blank" href="/c">更改埋点</a>
        </li>
        <li>
          <a target="_blank" href="/d">查找埋点</a>
        </li>
      </ul>
    </nav>
  </body>
</html>
`

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(homePage)
})
.listen(3000, () => {
  console.log('Server Running At 3000')
})
