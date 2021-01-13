<script>
    import InputCustom from '../Componentes/inputCustom.svelte';
    import {link, push} from 'svelte-spa-router';
    import Swal from 'sweetalert2'; 
    import axios from 'axios';


    const ls = localStorage.getItem('token');
    $: if(ls!=null){
        push('/Inicio')
    }


    function login(){
        const form = document.getElementById('loginForm');
        axios.post('http://localhost/sveltephp/login/login.php', new FormData(form)).then(res=>{

            console.log(res)
            if(res.data.res=='success'){
                localStorage.setItem('token', JSON.stringify(res.data.token))
                push('/Inicio')

            } else {
                localStorage.removeItem('token');
                localStorage.clear();
                Swal.fire('Ooops','Email o contrasena incorrectos','error')
            }
        })

    }
</script>


<h1>Login</h1>
<form on:submit|preventDefault={login} id="loginForm" autocomplete="off">
    <InputCustom type="email" id="email" name="email" label='email' icon="account_circle"/>
    <InputCustom type="password" id="pass" name="pass" label='password' icon="https"/>
    <button type="submit" class="btn green">Entrar</button>
    <a href="/Registro"  use:link class="btn blue">Registro</a>

</form>