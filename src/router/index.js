import Vue from 'vue'
import Router from 'vue-router'
const Infomations = r => require.ensure([], () => r(require('@/components/pages/Infomations')), 'chunkname0');
const Plan = r => require.ensure([], () => r(require('@/components/pages/Plan')), 'chunkname0');
const Questions = r => require.ensure([], () => r(require('@/components/pages/Questions')), 'chunkname0');
const QuestionDetail = r => require.ensure([], () => r(require('@/components/pages/QuestionDetail')), 'chunkname0');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Infomations',
      component: Infomations
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/detail',
      name: 'QuestionDetail',
      component: QuestionDetail
    }
  ]
})
