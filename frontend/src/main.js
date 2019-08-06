import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import  firebase from 'firebase';

Vue.config.productionTip = false
Vue.use(BootstrapVue)

const config = {
  apiKey: "AIzaSyC_u27mI5neEM6BVCM1yqrAN-WHTk8-QKE",
  authDomain: "course-online-b26e1.firebaseapp.com",
  databaseURL: "https://course-online-b26e1.firebaseio.com",
  projectId: "course-online-b26e1",
  storageBucket: "course-online-b26e1.appspot.com",
  messagingSenderId: "179670983174",
  appId: "1:179670983174:web:64c4ea52d04ec19d"
};

firebase.initializeApp(config);

new Vue({
  render: h => h(App),
}).$mount('#app')
