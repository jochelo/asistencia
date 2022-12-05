<template>
<h4>RELOJ</h4>
  <div class="row">
    <div class="col-md-6" v-for="empleado in empleados">
      <div class="card">
        <div class="card-body">
          <p>Nombre: {{ empleado.nombre + ' ' + empleado.apellido }}</p>
          <p>CI: {{ empleado.carnet }}</p>
        </div>
        <div class="card-footer text-end">
          <div class="btn-group">
            <button @click="onMarcarAsistencia(empleado)" class="btn btn-outline-primary border-0">MARCAR</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {getEmpleados, storeAsistenciaEmpleado} from "@/services/empleado-service";
import moment from 'moment';

export default {
  name: "empleado-asistencia",
  data() {
    return {
      empleados: []
    }
  },
  methods: {
    async onInit() {
      /// peticion a un servicio (una funcion que hace una peticion http)
      this.empleados = await getEmpleados();
    },
    async onMarcarAsistencia(empleado) {
      // console.log("EEEEE", empleado);
      /// construir el objeto que enviaremos al back
      const date = moment().format('YYYY-MM-DD HH:mm:ss');
      const obj = {
        empleado_id: empleado.id,
        date
      }
      await storeAsistenciaEmpleado(obj);
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
