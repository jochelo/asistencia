export const isAuthenticated = (to, from, next) => {
    if(localStorage.getItem('token-asistencia') !== null) {
        /// verificar si la llave a expirado
        const token = atob(localStorage.getItem('token-asistencia')); /**lkjfdsñkfjds.lkasjdlkasjdsladasdasd.jashdkashdkjasdh*/
        const payload = token.split('.')[1];

        const res = JSON.parse(atob(payload));
        const now = Math.floor(Date.now() / 1000);

        console.log('GUARD', res, now);

        if(now > res.exp) {
            localStorage.removeItem('token-asistencia');
            next({name: 'Login'})
        }
        next();
    } else {
        next({name: 'Login'})
    }
}
