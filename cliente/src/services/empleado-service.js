import httpClient from "@/environments/environment";

export const getEmpleados = async () => {
      const {data} = await httpClient.get('/get-empleados');
      console.log('service', data);
      return data;
      /**
       *
       * {
       *     data: esta nuestro resultado a la peticion
       * }
       *
       * */
}
