<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/usuario-index">Usuarios</router-link> |
    <router-link to="/empleado-index">Empleados</router-link>
  </nav>-->
  <navbar/>
  <div class="container">
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/admin/layouts/navbar';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
