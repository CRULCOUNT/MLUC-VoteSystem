import {createRouter, createWebHistory} from "vue-router";
import Campaign from '../views/Campaign.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/webm/Dashboard.vue';
import Votes from '../views/webm/Votes.vue';
import VoterView from '../views/voter/VoterView.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import store from '../store';


const routes = [
  {
    path: '/campaign',
    name: 'Campaign',
    component: Campaign
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/webm/dashboard',
    component: DefaultLayout,
    meta: {
      requiresAuth: true
    },
    children: [{
        path: '/webm/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/webm/votes',
        name: 'Votes',
        component: Votes
      }]
  },
  {
    path: '/voter/voter_view',
    name: 'VoterView',
    component: VoterView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth && !store.state.user.token){
    next({name: 'Login'})
  } else if(store.state.user.token && (to.name === 'Login')) {
    next({name: 'Dashboard'});
  } else {
    next();
  }
})

export default router;
