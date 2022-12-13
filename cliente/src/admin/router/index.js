import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home';
import UsuarioIndex from '@/admin/usuarios/usuario-index';
import UsuarioCreate from '@/admin/usuarios/usuario-create';
import EmpleadoIndex from '@/admin/empleados/empleado-index';
import EmpleadoCreate from "@/admin/empleados/empleado-create";
import EmpleadoAsistencia from "@/admin/empleados/empleado-asistencia";
import login from "@/components/login";

export default {
  name: 'admin',
  component: () => import(/* webpackChunkName: "admin"*/  '../Admin'),
  children: [
    {
      path: 'usuario-index',
      name: 'usuarioIndex',
      component: UsuarioIndex
    },
    {
      path: 'usuario-create',
      name: 'usuarioCreate',
      component: UsuarioCreate
    },
    {
      path: 'empleado-index',
      name: 'empleadoIndex',
      component: EmpleadoIndex
    },
    {
      path: 'empleado-create',
      name: 'empleadoCreate',
      component: EmpleadoCreate
    },
    {
      path: 'empleado-asistencia',
      name: 'empleadoAsistencia',
      component: EmpleadoAsistencia
    },
  ]
}
