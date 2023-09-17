import { createApp } from 'vue';
import App from './App.vue'; // make sure you have this component
import router from './router';
import './styles.css'; // adjust the path according to your folder structure
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app');
