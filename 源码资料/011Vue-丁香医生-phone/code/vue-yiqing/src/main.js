import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入css初始化
import './assets/css/base.css'
//引入js适配移动端
// import './assets/js/phone'
//引入vant库
import './plugins/vant'
//挂载原型上 
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;

//使用开发分插件 
import echarts from './plugins/echarts'
Vue.use(echarts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
