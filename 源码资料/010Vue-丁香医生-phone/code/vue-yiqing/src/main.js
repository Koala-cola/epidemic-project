import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入css初始化
import './assets/css/base.css'
//引入js适配移动端
// import './assets/js/phone'
//引入vant库
import './plugins/vant'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
