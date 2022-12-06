import httpClient from "@/environments/environment";

export const storeUsuario = async (obj) => {
      const {data} = await httpClient.post('/store-usuario', obj);
      console.log('usuario create route', data);
      return data;
}
