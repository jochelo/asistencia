<template>
<h4>estas en empleado index</h4>
  <button class="btn btn-primary mb-3">Nuevo Empleado</button>
  <div class="row">
    <div class="col-md-6" v-for="empleado in empleados">
      <div class="card">
        <div class="card-body">
          <p>Nombre: {{ empleado.nombre + ' ' + empleado.apellido }}</p>
          <p>CI: {{ empleado.carnet }}</p>
          <p>Cel: {{ empleado.celular }}</p>
          <p>Dirección: {{ empleado.direccion }}</p>
        </div>
        <div class="card-footer text-end">
          <div class="btn-group">
            <button class="btn btn-outline-success border-0">Editar</button>
            <button class="btn btn-outline-danger border-0">Eliminar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {getEmpleados} from "@/services/empleado-service";

export default {
  name: "empleado-index",
  data() {
    return {
      empleados: []
    }
  },
  methods: {
    async onInit() {
      /// peticion a un servicio (una funcion que hace una peticion http)
      this.empleados = await getEmpleados();
      console.log('EMPLEADOS', this.empleados);
    }
  },
  created() {
    /// llamamos al back
    this.onInit();
  }
}
</script>

<style scoped>

</style>
