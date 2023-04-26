import Vue from 'vue';
import VueRouter from 'vue-router';
import CricketList from '../views/cricket/List.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: CricketList
  }
];

const router = new VueRouter({
  routes
});

export default router;