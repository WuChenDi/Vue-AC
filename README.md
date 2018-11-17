# Vue+Vue-Router+Vuex+SSR

#### 软件架构
***
 * Vue核心
    1. Vue实例和各种API
    2. Vue组件开发高级内容
    3. .vue文件开发模式原理解析
    4. render function作用以及原理

* Vuex
  1. Vuex的基本使用和原理
  2. Vuex分模块使用的方法
  3. Vuex插件开发方式
  4. Vuex在服务端渲染过程中扮演的重要角色

* Vue-router
  1. Vue-router的基本使用和原理
  2. $router和$route实例的区别和用处
  3. 各种导航守卫的执行时间和用处
  4. 在服务端渲染时如何使用

* 服务端渲染
  1. 配合webpack-dev-server获取client bundle
  2. 适用vue-meta管理title meta等头信息
  3. renderer和bundleRenderer的区别和优势
  4. 同步服务端渲染和客户端渲染的数据

* Webpack
  1. 基础Webpack配置和使用
  2. 服务端渲染和客户端渲染的不同配置方式
  3. 横跨Webpack3和Webpack4的升级
  4. 生产环境的打包优化
  5. 在Nodejs中将Webpack作为模块使用


## 项目运行
***
通过npm安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/ "nodejs"))
#### 注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本
```
git clone https://github.com/WuChenDi/Vue-AC.git

cd Vue-AC

npm install  或 yarn(推荐)

npm run dev
```

## 总结
***
- Vue应用开发
- Vue+Webpack工作流搭建
- Vue+Vue-Router+Vuex项目架构
- Vue服务端渲染深度集成
