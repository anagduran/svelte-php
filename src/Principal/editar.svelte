<script>

    import axios from 'axios';
    import Sesion from '../session.js';
    import InputCustom from '../Componentes/inputCustom.svelte';
    import Swal from 'sweetalert2';
    import {push} from 'svelte-spa-router';
    import {onMount} from 'svelte';

    Sesion.session();

    export let params = {}
    console.log(params.id)
    let id = params.id
    let post = {}
    function getPost(){
        axios.get("http://localhost/sveltephp/posts/post.php?id="+id).then(res=>{
            console.log(res)
            post = res.data
        })
    }

    function editar(){

        const form = document.getElementById('formEditar');
        axios.post("http://localhost/sveltephp/posts/editarPost.php", new FormData(form)).then(res=>{

            console.log(res)
            if(res.data==="success"){
                Swal.fire('Muy bien', 'Tu post fue editado', 'success');
                push('/Inicio');
            } else {
                Swal.fire('Ooops', 'Tu post no fue editado', 'error');
            }
        })

    }

    function eliminar(){

        Swal.fire({
            title: 'Estas seguro?',
            text: "Esta accion no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo!'
            }).then((result) => {
            if (result.isConfirmed) {

                axios.post("http://localhost/sveltephp/posts/eliminar.php?id="+id).then(res=>{
                    console.log(res);
                    Swal.fire(
                    'Borrado!',
                    'Tu post ha sido borrado.',
                    'success'
                    )

                    push("/Inicio")
                    
                })
                
            }
        })

    }

    onMount(getPost)
</script>

<h1>Editar</h1>




<form on:submit|preventDefault={editar} id="formEditar" autocomplete="off">

    <input type="hidden" name="id" bind:value={id}>

    <InputCustom tipo="editar" name="titulo"  icon ="title" value={post.titulo}/>

    <InputCustom tipo="editar" name="post"  icon ="comment"  value={post.post} />

    <button class="btn blue" type="submit">Editar post</button>


</form>

<hr>
<button class="btn red" on:click={eliminar}>Eliminar post</button>