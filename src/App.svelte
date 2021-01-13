<script>
	import Router from 'svelte-spa-router';
	import routes from './routes.js';
	import Menu from './Componentes/menu.svelte';
</script>

<Menu/>

<div class="container">
	<Router {routes}></Router>
</div>