import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// //导入less,webpack会让main.js这个入口文件和.less建立关系
// import '@/styles/base.less'

//导入element.js
import '@/plugins/element.js'

import router from '@/router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
