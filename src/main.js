import { createApp } from 'vue';
import './assets/styles.css';
import App from './App.vue';

// we change: createApp(App).mount('#app'); to add stuff in the middle
const app = createApp(App)
app.mount('#app');

