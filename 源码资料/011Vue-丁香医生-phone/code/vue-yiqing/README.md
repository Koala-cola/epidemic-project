## 丁香医生疫情 
    移动端的疫情数据信息介绍 

## 技术点
1. 组件拆分
2. 网络请求axios 
3. vue中使用echarts图表
4. Vue中封装的tabs组件-自定义封装组件
5. Vue中使用swiper 
6. Vue中使用vant库


## 项目初始化
1. 创建项目 vue create vue-yiqing
2. 安装：npm i axios  vant -S
3. 删除无用的组件
4. css初始化
5. 移动端适配方案： 
   1. phone.js 引入main.js   / 媒体查询设置 各各屏幕的css 
   2. vw布局    100vw=750px 
6. 配置一个公共的接口文档



## 疫情信息
1. 处理接口地址
2. http://api.tianapi.com/ncov/index?key=b5919dd6f573907e378d0a6be7a78ff3


## Vant库使用
1. 安装：npm i vant -S 
2. 自动按需引入组件 (推荐):npm i babel-plugin-import -D
3. 对于使用 babel7 的用户，可以在 babel.config.js 中配置
        module.exports = {
            plugins: [
                ['import', {
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
                }, 'vant']
            ]
        };

4. 创建一个vant.js插件使用 vant.js
5. main.js 引入vant库
    import './plugins/vant'


## Echarts
1. 安装echarts: npm i echarts@4.x -S 
2. 使用方式
   1. 方式1：组件内部使用单独使用
      1. 导入：import echarts from 'echarts'
      2. 直接使用

   2. 方式2：挂载到vue原型上 所有组件都可以使用
      1. 导入：import echarts from 'echarts'
      2. main.js挂载：Vue.prototype.$echarts = echarts

   3. 方式3：开发成vue插件 echarts
      1. 创建js文件：const install = function (Vue, options) {}
      2. 导入main.js 
        //使用开发的插件 
        import echarts from './plugins/echarts'
        Vue.use(echarts)
