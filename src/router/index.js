import Vue from 'vue'
import VueRouter from 'vue-router'
// Auth routes

// Main routes
import Dashboard from '../views/main/Dashboard'
import Pickups from '../views/main/Pickups.vue'

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
        path: "/pickups",
        component: Pickups,
        name: "Pickups",
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
