import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Shop from '../views/Shop.vue'
import collection from '../components/Collection.vue'
import Collections from '../views/Collections.vue'
import Product from "../components/ProductCard.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },

  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },

  {
    path:"/product",
    name:"Product",
    component: Product 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/collect',
    name: 'Collections',
    component: collection,
  },
  {
    path: '/collections',
    name: 'Collections',
    component: Collections,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
