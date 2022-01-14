import Vue from 'vue'
import VueRouter from 'vue-router'
// Auth routes

// Main routes
import Dashboard from '../views/main/Dashboard'
import Home from '../views/main/Home.vue'

// Main Layout
import DashboardLayout from '../layouts/DashboardLayout'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"Dashboard",
    component:DashboardLayout,
    props:true,
    meta: {
      requiresAuth: true,
    },
    children:[
      {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/home",
        component: Home,
        name: "Home",
        meta: {
          requiresAuth: true,
        },
      },
      
      
    ]
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
