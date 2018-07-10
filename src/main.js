import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';
import Chart from './Chart.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  components: {
    demo: Chart,
  },
  render: (h) => h(Chart),
});
