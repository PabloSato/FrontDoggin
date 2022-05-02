import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
export const BASEURL = 'http://dogginer.eu-west-3.elasticbeanstalk.com';

//CSS Global
import './assets/global.css';

app.use(store).use(router).mount('#app');
