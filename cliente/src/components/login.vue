<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-header">INICIAR SESION</div>
          <div class="card-body">
            <form>
              <div class="my-3">
                <input type="text" class="form-control" id="cuenta" placeholder="Cuenta" v-model="usuario.cuenta">
              </div>
              <div class="my-3">
                <input type="password" class="form-control" id="password" placeholder="Contraseña" v-model="usuario.password">
              </div>
              <div class="my-3 d-grid gap-1">
                <button class="btn btn-primary" type="submit">INGRESAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      usuario: {
        cuenta: null,
        password: null
      }
    }
  }
}
</script>
