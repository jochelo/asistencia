<template>
<h4>estas en empleado index</h4>
  <button @click="onCreate" class="btn btn-primary mb-3">
    <fa-icon icon="add"/>
    Nuevo Empleado
  </button>
  <div class="row">
    <div class="col-md-6 my-2" v-for="empleado in empleados">
      <div class="card">
        <div class="card-body">
          <p>Nombre: {{ empleado.nombre + ' ' + empleado.apellido }}</p>
          <p>CI: {{ empleado.carnet }}</p>
          <p>Cel: {{ empleado.celular }}</p>
          <p>Dirección: {{ empleado.direccion }}</p>
        </div>
        <div class="card-footer text-end">
          <div class="btn-group">
            <button class="btn btn-outline-success border-0">
              <fa-icon icon="edit"/>
            </button>
            <button class="btn btn-outline-danger border-0">
              <fa-icon icon="trash"/>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {getEmpleados} from "@/services/empleado-service";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAdd, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faEdit, faTrash, faAdd);

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
    },
    onCreate() {
      this.$router.push({name: 'empleadoCreate'});
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
