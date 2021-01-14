<script>    

    import axios from 'axios';
    import Sesion from '../session.js';
    import InputCustom from '../Componentes/inputCustom.svelte';
    import Swal from 'sweetalert2';
    import {push} from 'svelte-spa-router';

    Sesion.session();


    let user = JSON.parse(localStorage.getItem('user'));
    let foto = JSON.parse(localStorage.getItem('foto'));

    function guardar(){

        const form = document.getElementById('formGuardar');
        axios.post("http://localhost/sveltephp/posts/altaPost.php", new FormData(form)).then(res=>{

            console.log(res)
            if(res.data==="success"){
                Swal.fire('Muy bien', 'Tu post fue guardado', 'success');
                push('/Inicio');
            } else {
                Swal.fire('Ooops', 'Tu post no fue guardado', 'error');
            }
        })

    }


</script>

<h1>Guardar</h1>
<form on:submit|preventDefault={guardar} id="formGuardar" autocomplete="off">

    <input type="hidden" name="usuario" bind:value={user}>
    <input type="hidden" name="foto" bind:value={foto}>

    <InputCustom id="titulo" name="titulo" label="Titulo del post" icon ="title"/>

    <InputCustom id="post" name="post" label="Escribe el post" icon ="comment"/>

    <button class="btn blue" type="submit">Guardar post</button>


</form>