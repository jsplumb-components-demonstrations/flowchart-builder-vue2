import Vue from 'vue'
import App from './App.vue'
import { JsPlumbComponentsFlowchartVue2Plugin } from '@jsplumb-components/flowchart-vue2'

Vue.config.productionTip = false

// import flowchart component plugin
Vue.use(JsPlumbComponentsFlowchartVue2Plugin)

new Vue({ render: h => h(App) }).$mount('#app')

