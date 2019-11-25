import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Intro from '@/components/Intro';
import NotFound from '@/components/NotFound';
import Signup from '@/components/Signup';
import EnrollNan from '@/views/refugee/EnrollNan';
import ShowRefugee from '@/views/refugee/ShowRefugee';
import ShowVisit from '@/views/ShowVisit';
import WriteVisit from '@/views/WriteVisit';
import Statistic from '@/views/Statistic';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/enrollNan',
      name: 'EnrollNan',
      component: EnrollNan
    },
    {
      path: '/showRefugee',
      name: 'ShowRefugee',
      component: ShowRefugee
    },
    {
      path: '/showVisit',
      name: 'ShowVisit',
      component: ShowVisit
    },
    {
      path: '/writeVisit',
      name: 'WriteVisit',
      component: WriteVisit
    },
    {
      path: '/statistic',
      name: 'Statistic',
      component: Statistic
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
