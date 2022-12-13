<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-header text-center">INICIAR SESION</div>
          <div class="card-body">
            <img class="img-fluid" src="@/assets/user.png" alt="">
            <form @submit.prevent="onLogin">
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
import {login} from "@/services/usuario-service";

export default {
  name: "login",
  data() {
    return {
      usuario: {
        cuenta: null,
        password: null
      }
    }
  },
  methods: {
    async onLogin() {
      try {
        await login(this.usuario);
        this.$toast.success('Sesión iniciada');
        this.$router.push({name: 'admin'});
      } catch (e) {
        console.log(e);
        this.$toast.error(e.response.data.msg);
      }
    }
  }
}
</script>
