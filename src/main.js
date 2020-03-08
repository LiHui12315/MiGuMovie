import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import { Row, Col, Tabbar, TabbarItem } from 'vant'
import './global.scss'
Vue.use(Row).use(Col).use(Tabbar).use(TabbarItem)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
