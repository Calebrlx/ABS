import { createApp } from 'vue';
import App from './App.vue'; // make sure you have this component
import router from './router';
import './styles.css'; // adjust the path according to your folder structure

createApp(App).use(router).mount('#app');
