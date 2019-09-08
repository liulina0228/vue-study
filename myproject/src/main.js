import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
class Bus {
  constructor(){
    this.callbacks = {};
  }
  $on(name, fn) {
    this.callbacks[name] = this.callbacks[name] || [];
    this.callbacks[name].push(fn);
  }
  // vue中的$bus也是只要一emit就全部的on都执行一次？
  $emit(name, agrs){
    if(this.callbacks[name]) {
      this.callbacks[name].array.forEach(cd => cd(agrs));
    }
  }
}
Vue.prototype.$bus = new Bus();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
