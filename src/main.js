import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
var fly = require('flyio')
Vue.config.productionTip = false
fly.config.baseURL = 'http://localhost:8080'
Vue.prototype.$fly = fly
Vue.use(Antd)
new Vue({
  store,
  router,
  fly,
  render: h => h(App)
}).$mount('#app')

export { fly }
