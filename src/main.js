import { createApp } from 'vue';

import App from './App.vue';
import UserInfo from './components/UserInfo.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);


//global component
app.component('user-info', UserInfo);
app.component('base-badge',BaseBadge);
app.mount('#app');
