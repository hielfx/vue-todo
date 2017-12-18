// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'semantic-ui/dist/semantic.min';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'semantic-ui/dist/semantic.min.css';
import Vue from 'vue';
import App from './App';
import router from './router';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
