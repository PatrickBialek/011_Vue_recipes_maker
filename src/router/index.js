import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import AddDrink from "@/components/AddDrink";

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-drink',
      name: 'AddDrink',
      component: AddDrink
    }
  ]
})
