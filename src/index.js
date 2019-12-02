import Vue from 'vue'
import router from './router'
import App from './App'
// import axios from'axios'

import 'assets/css/app.styl'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// const axiosConfig = {
// baseURL:'http://...:8000/api'
// };
// Vue.prototype.$axios = axios.create(axiosConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
