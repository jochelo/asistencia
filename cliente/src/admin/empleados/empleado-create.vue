<template>
  <h3>REGISTRAR EMPLEADO</h3>
  <form @submit.prevent="onStore">
    <div class="my-3">
      <label for="nombre">Nombre</label>
      <input type="text" class="form-control" id="nombre" v-model="empleado.nombre">
    </div>
    <div class="my-3">
      <label for="apellido">Apellido</label>
      <input type="text" class="form-control" id="apellido" v-model="empleado.apellido">
    </div>
    <div class="my-3">
      <label for="celular">Celular</label>
      <input type="number" class="form-control" id="celular" v-model="empleado.celular">
    </div>
    <div class="my-3">
      <label for="carnet">Carnet</label>
      <input type="text" class="form-control" id="carnet" v-model="empleado.carnet">
    </div>
    <div class="my-3">
      <label for="direccion">Direccion</label>
      <textarea class="form-control" id="direccion" cols="30" rows="3" v-model="empleado.direccion"></textarea>
    </div>
    <div class="my-3">
      <div class="btn-group">
        <button class="btn btn-primary" type="submit">REGISTRAR</button>
        <button class="btn btn-secondary" @click="onCancel">CANCELAR</button>
      </div>
    </div>
  </form>
</template>

<script>
import {storeEmpleado} from "@/services/empleado-service";

export default {
  name: "empleado-create",
  data() {
    return {
      empleado: {
        nombre: null,
        apellido: null,
        celular: null,
        carnet: null,
        direccion: null
      }
    }
  },
  methods: {
    async onStore() {
      console.log(this.empleado);
      await storeEmpleado(this.empleado);
    },
    onCancel() {
      this.$router.push({name: 'empleadoIndex'});
    }
  }
}
</script>
