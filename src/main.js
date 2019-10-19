import Vue from 'vue';
import App from './App';
import router from './router';
// import ViewUI from 'view-design';
import echarts from 'echarts';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;
// Vue.use(router);
// Vue.use(ViewUI);
// 定义全局变量
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
