<template>
  <div class="container">
    <h4>LISTA DE USUARIOS</h4>
    <button @click="onCreate" class="btn btn-primary mb-3">Nuevo Usuario</button>
    <div class="row">
      <div class="col-md-6" v-for="usuario in usuarios">
        <div class="card">
          <div class="card-body">
            <p>Nombre: {{ usuario.nombre + ' ' + usuario.apellido }}</p>
            <p>CI: {{ usuario.ci }}</p>
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
  </div>
</template>

<script>
export default {
  name: "usuario-index",
  data() {
    return {
      usuarios: [
        {
          nombre: 'Juan',
          apellido: 'Perez',
          ci: '2315453'
        },
        {
          nombre: 'Juana',
          apellido: 'de arco',
          ci: '23333333'
        }
      ]
    }
  },
  methods: {
    onCreate() {
      this.$router.push({name: 'usuarioCreate'});
    }
  }
}
</script>

<style scoped>

</style>