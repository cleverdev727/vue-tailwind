import Vue from 'vue';
import VueRouter from 'vue-router';
import CricketList from '../views/cricket/List.vue'
import MobileCricketList from '../views/cricket/MobileList.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: CricketList
  },
  {
    path: '/mobile',
    component: MobileCricketList
  },
];

const router = new VueRouter({
  routes
});

export default router;