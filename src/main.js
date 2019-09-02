import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'reset-css/reset.css'
import '@/assets/css/common.less'
// import store from '@/store'
import Echarts from 'echarts'
import TreeTable from 'tree-table-vue'
import * as fullFillter from '@/libs/filter'

Object.keys(fullFillter).forEach(key => {
  Vue.filter(key, fullFillter[key])
})

Vue.prototype.echarts = Echarts
Vue.use(TreeTable)
Vue.use(Echarts)

Vue.config.productionTip = false
Vue.use(iView)
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
