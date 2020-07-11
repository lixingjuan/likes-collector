import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {
  Button,
  Row,
  Col,
  Table,
  TableColumn,
  Message,
  Tabs,
  TabPane
} from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(VueRouter)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$message = Message

Vue.config.productionTip = false
const routes = [{ path: '/', component: App }]

const router = new VueRouter({
  mode: 'hash',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
