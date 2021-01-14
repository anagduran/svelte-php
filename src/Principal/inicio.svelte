<script>
import Sesion from '../session.js';  
import axios from 'axios';
import {onMount} from 'svelte';
import {link} from 'svelte-spa-router';


Sesion.session();

let usuario ='';

function getUser(){
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token)
    axios.post('http://localhost/sveltephp/posts/user.php?token='+token).then(res=>{

        
        usuario = res.data.user;
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('foto', JSON.stringify(res.data.foto))

    })
}

onMount(getUser) 

let posts = [];
let promesa = ajax();
async function ajax(){
    const res = await fetch('http://localhost/sveltephp/posts/posts.php')
    posts = await res.json();

    if(res.ok){
        return posts
    } else {
        throw new Error("No hay conexion con la API");
    }
}

</script>

<h1>Bienvenido {usuario}</h1>

{#await promesa}
    <p>Cargando datos ....</p>
{:then posts}
    {#each posts as item}
        <div class="row">
            <div class="col s1">
                <img src="{item.foto}" alt="img" width="50" height="50">
            </div>
            <div class="col s11">
                <b>{item.usuario}</b>
                <h5>{item.titulo}
                
                    {#if item.usuario === usuario}
                        <a href="/Editar/{item.id}" use:link><i class="material-icons">edit</i></a>
                    {/if}
                
                </h5>
                <p>{item.post}</p>
                <hr>
            </div>
        </div>
    {:else}
         <h3>No hay datos en la base</h3>
    {/each}
{:catch error}

    <p style="color: red;">{error}</p>

{/await}
