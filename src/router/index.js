import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import register from "@/views/register.vue";

const routes = [
  { 
    name: 'login',
    path: '/login', 
    component: Login,
  },
  { 
    name: 'profile',
    path: '/', 
    component: Profile, 
    props:true 
  },
  { 
    name: 'register',
    path: '/register', 
    component: register, 
    props:true 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;