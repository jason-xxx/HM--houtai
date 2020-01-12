import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局引入index.less
import '@/styles/index.less'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
