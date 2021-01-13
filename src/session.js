import {token} from './store.js';
import {push} from 'svelte-spa-router';

const Sesion = {
    session: function(){
        const ls = localStorage.getItem('token');
        if(ls != null){
            console.log("aqui")
            console.log(ls)
            token.set(1)
        } else {
            push('/')
        }
    }
}

export default Sesion