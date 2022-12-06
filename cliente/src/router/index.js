import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home';
import UsuarioIndex from '@/admin/usuarios/usuario-index';
import UsuarioCreate from '@/admin/usuarios/usuario-create';
import EmpleadoIndex from '@/admin/empleados/empleado-index';
import EmpleadoCreate from "@/admin/empleados/empleado-create";
import EmpleadoAsistencia from "@/admin/empleados/empleado-asistencia";
import login from "@/components/login";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: login
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
  {
    path: '/empleado-create',
    name: 'empleadoCreate',
    component: EmpleadoCreate
  },
  {
    path: '/empleado-asistencia',
    name: 'empleadoAsistencia',
    component: EmpleadoAsistencia
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
