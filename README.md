# react-loading-demand
### this is a babel plugin for react-loading

### 🛎 how to use(如何使用)?

```js
npm install --save-dev react-loading-demand
```



### 🛎 how to config(如何在你的项目中配置)

#### 📕 方式1:
```js
// .babelrc
{
  "plugins": [
    ["react-loading-demand", {"library": "react-loadingg"}]
  ]
}

// 配合 webpack 里的 babel-loader
module: {
  rules: [{
    test: /\.js$/,
    loader: "babel-loader",
  }]
},
```

#### 📕 方式2:

```diff
module: {
  rules: [{
    test: /\.js$/,
    loader: "babel-loader",
+   options: {
+     plugins: [
+       ["react-loading-demand", { "library": "react-loadingg" }],
+     ]
+   }
  }]
},
```

### 🛎 how to Change(如何转化)
```js
import { CommonLoading } from "react-loadingg";
``` 
  🔨
```js
import CommonLoading  from "react-loadingg/lib/CommonLoading";
```

