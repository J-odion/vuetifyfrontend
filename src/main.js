import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false



Vue.prototype.$apiurl = process.env.VUE_APP_API_SERVER || 'https://digital-maturity-scan.herokuapp.com/api/v1/'

// Vue.prototype.$apiurl = process.env.VUE_APP_API_SERVER || 'http://localhost:3000/api/v1/'
Vue.prototype.$assessmentUuid = ''
Vue.prototype.$metricCount = 0

Vue.prototype.$postUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=https://www.linkedin.com/feed/update/urn:li:activity:6917121818252218368'
Vue.prototype.$postParams = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=700'





new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')