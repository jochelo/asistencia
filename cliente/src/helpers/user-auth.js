export const userCuenta = () => {
    let cuenta = '';

    if(localStorage.getItem('token-asistencia') !== null) {
        const token = atob(localStorage.getItem('token-asistencia'));
        /**lkjfdsñkfjds.lkasjdlkasjdsladasdasd.jashdkashdkjasdh*/
        const payload = token.split('.')[1];
        /**.lkasjdlkasjdsladasdasd.*/
        const res = JSON.parse(atob(payload));
        const {data} = res;
        cuenta = data.cuenta;
    }
    return cuenta;
}
