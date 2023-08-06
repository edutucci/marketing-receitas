import './assets/main.css'
import 'hawkvuemdframeworkvue3/dist/hawk_default_stylus.styl';
import 'hawkvuemdframeworkvue3/dist/hawkvuemd-vue3.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Components from 'hawkvuemdframeworkvue3';

import App from './App.vue'
import router from './router'

const app = createApp(App)

Object.keys(Components.Components).forEach((name) => {
  app.component(name, Components.Components[name]);
});

app.use(Components)
app.use(createPinia())
app.use(router)

app.mount('#app')
