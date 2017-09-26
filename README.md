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


项目结构
.
├── README.md
├── dist  // 打包构建后的文件夹
│   ├── build.js
│   └── build.js.map
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css.css
│   │   ├── icon.css
│   │   └── logo.png
│   ├── constant
│   │   └── api.js  // 配置api接口文件
│   ├── http.js // 封装fetch、post请求及http 拦截器配置文件
│   ├── index.vue
│   ├── login.vue
│   ├── main.js
│   ├── repository.vue
│   ├── router.js // 路由配置文件
│   └── store
│       ├── store.js  
│       └── types.js  // vuex types
└── webpack.config.js