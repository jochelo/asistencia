<template>
  <h3>REGISTRAR USUARIO</h3>
  <form @submit.prevent="onStore">
    <div class="my-3">
      <label for="nombre">Nombre Completo</label>
      <input type="text" class="form-control" id="nombre" v-model="usuario.nombre">
    </div>
    <div class="my-3">
      <label for="cuenta">Cuenta</label>
      <input type="text" class="form-control" id="cuenta" v-model="usuario.cuenta">
    </div>
    <div class="my-3">
      <label for="password">Contraseña</label>
      <input type="password" class="form-control" id="password" v-model="usuario.password">
    </div>
    <div class="my-3">
      <div class="btn-group">
        <button class="btn btn-primary" type="submit">REGISTRAR</button>
        <!--<button class="btn btn-secondary" @click="onCancel">CANCELAR</button>-->
      </div>
    </div>
  </form>
</template>

<script>

import {storeUsuario} from "@/services/usuario-service";

export default {
  name: "usuario-create",
  data() {
    return {
      usuario: {
        nombre: null,
        cuenta: null,
        password: null
      }
    }
  },
  methods: {
    async onStore() {
      console.log(this.usuario);
      await storeUsuario(this.usuario);
    },
    onCancel() {
      this.$router.push({name: 'empleadoIndex'});
    }
  }
}
</script>
