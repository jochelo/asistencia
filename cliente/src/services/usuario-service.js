import httpClient from "@/environments/environment";
import router from "@/router";

export const storeUsuario = async (obj) => {
      const {data} = await httpClient.post('/store-usuario', obj);
      console.log('usuario create route', data);
      return data;
}

export const login = async (obj) => {
      const {data} = await httpClient.post('/login', obj);
      console.log(data);
      if (data.token) {
            localStorage.setItem('token-asistencia', btoa(`Bearer ${data.token}`))
      }
      return data;
}

export const logout = () => {
      if(localStorage.getItem('token-asistencia') !== null) {
            localStorage.removeItem('token-asistencia');
            router.push({name: 'Login'});
      }
}
