import './assets/main.css'
import 'vue-toastification/dist/index.css';
import Toast from "vue-toastification";
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(Toast);
app.mount('#app')
