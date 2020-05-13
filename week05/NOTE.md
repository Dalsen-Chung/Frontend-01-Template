# 每周总结可以写在这里

## 浏览器工作原理
### 总论与HTTP协议
#### 在浏览器中输入URl到页面完全呈现的过程中都发生了那些事儿？
    1.拿着URl进行DNS Lookup，最终通过物理地址访问主机并获取指定资源（一般返回HTML文件）
    2.由上至下对HTML文件进行解析形成DOM Tree （parse的过程）
    3.遇到需要下载的Css文件会造成阻塞，待下载完Css之后形成Layout Tree
    4.最后结合DOM Tree及Layout Tree形成Render Tree进行渲染，生成Bitmap

#### ISO-OSI七层网络结构
- HTTP  [ Node.js中：require('http') ]
    - 应用
    - 表示
    - 会话
- TCP   [ Node.js中：require('net') ]
    - 传输(TLS/SSL)
- Internet
    - 网络
- 4G/5G/WIFI
    - 数据链路
    - 物理层