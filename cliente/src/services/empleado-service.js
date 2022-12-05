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

export const storeEmpleado = async (obj) => {
      const {data} = await httpClient.post('/store-empleado', obj);
      console.log('service store', data);
      return data;
}

export const storeAsistenciaEmpleado = async (obj) => {
      const {data} = await httpClient.post('/store-asistencia-empleado', obj);
      console.log('service asistencia', data);
      return data;
}
