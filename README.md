# tuanzhuan_app

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 自动更新系统说明
## 请在 npm run-script build 获得静态文件目录www后，将www/static/img 文件夹复制到 www/static/css/static 目录下
## 然后在根目录使用命令 cordova-hcp build 创建更新数据和文档列表xml, 将www整个文件目录复制到服务器更新目录下即可，打开APP会自动检测更新。(cordova-hcp.json为命令配置文件,勿动)
## 若没有cordova-hcp命令，则请安装 npm i -g cordova-hot-code-push-cli
