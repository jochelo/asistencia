<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/usuario-index">Usuarios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/empleado-index">Empleados</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/empleado-asistencia">Marcar Asistencia</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="" id="navbarNavDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{cuenta}}</a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarNavDropdown2">
              <li>
                <a @click="Logout" class="dropdown-item">Cerrar sesión</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {userCuenta} from "@/helpers/user-auth";
import {logout} from "@/services/usuario-service";

export default {
  name: 'navbar',
  data() {
    return {
      cuenta: ''
    }
  },
  methods: {
    Logout() {
      logout();
      this.$toast.success('Sesion finalizada');
    }
  },
  created() {
    this.cuenta = userCuenta();
  }

}
</script>
