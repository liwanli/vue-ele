# vue-ele

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


```	项目结构
.
├── README.md
├── dist  // 打包构建后的文件夹
│   ├── static  //静态资源
│   ├── index.html
│   ├── build.js
│   └── build.js.map
├── index.html
├── package.json
├── resource  // 项目设计资源文件 
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── logo.png
│   ├── constant
│   │   └── api.js  // 配置api接口文件
│   ├── components
│   │   ├── goods		// 商品
│   │   ├── header  // 头部
│   │   ├── seller	// 
│   │   └── NotFoundComponent.vue //错误页
│   ├── http.js // 封装fetch、post请求及http 拦截器配置文件
│   ├── main.js
│   ├── repository.vue
│   ├── router
│   │   └── index.js // 路由配置文件
│   └── store
│       ├── store.js  
│       └── types.js  // vuex types
└── webpack.config.js
```