<script>
    import {link, push} from 'svelte-spa-router';
    import axios from 'axios';
    import {token} from '../store.js'

    function salir(){
        const tokenPHP = JSON.parse(localStorage.getItem('token'));
        axios.post('http://localhost/sveltephp/login/salir.php?token=' +tokenPHP).then(res=>{
            console.log(res)
            if(res.data == 'success'){
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('foto');
                token.set(0)
                push('/');
            }
        })
    }
</script>


<nav class="red">

    <div class="nav-wrapper">
        <a href="#" class="brand-logo">CRUD Svelte-PHP</a>
    
        {#if $token ===1 }
            <ul class="right hide-on-med-adn-down">
                <li><a href="/Inicio" use:link>Inicio</a></li>
                <li><a href="/Guardar" use:link>Guardar</a></li>
                <li><a href="#" on:click={salir}>Salir</a></li>
            </ul>
        {/if}
       
    </div>

</nav>

