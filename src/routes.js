import Inicio from './Principal/inicio.svelte';
import Guardar from './Principal/guardar.svelte';
import Editar from './Principal/editar.svelte';

import Login from './Login/login.svelte';
import Registro from './Login/registro.svelte';
import ErrorRuta from './Login/errorRuta.svelte';

const routes = {
    '/':Login,
    '/Registro':Registro,
    '/Inicio':Inicio,
    '/Guardar':Guardar,
    '/Editar/:id':Editar,
    '*':ErrorRuta

}

export default routes
