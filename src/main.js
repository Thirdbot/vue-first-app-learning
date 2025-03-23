import { createApp } from 'vue';

import App from './App.vue';
import UserInfo from './components/UserInfo.vue';

const app = createApp(App);


//global component
app.component('user-info', UserInfo);
app.mount('#app');
