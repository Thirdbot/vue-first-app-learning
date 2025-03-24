import { createApp } from 'vue';

import App from './App.vue';
import UserInfo from './components/UserInfo.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';
const app = createApp(App);


//global component
app.component('user-info', UserInfo);
app.component('base-badge',BaseBadge);
app.component('base-card',BaseCard);
app.mount('#app');
