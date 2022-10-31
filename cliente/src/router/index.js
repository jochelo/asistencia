import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home';
import UsuarioIndex from '@/admin/usuarios/usuario-index';
import UsuarioCreate from '@/admin/usuarios/usuario-create';
import EmpleadoIndex from '@/admin/empleados/empleado-index';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/usuario-index',
    name: 'usuarioIndex',
    component: UsuarioIndex
  },
  {
    path: '/usuario-create',
    name: 'usuarioCreate',
    component: UsuarioCreate
  },
  {
    path: '/empleado-index',
    name: 'empleadoIndex',
    component: EmpleadoIndex
  },
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
