<script>
    export let value = '';
    export let type = 'text';
    export let name;
    export let icon;
    export let id;
    export let label;

</script>

<div class="input-field">   
    <i class="material-icons prefix">{icon}</i>
    <input {type} {name} {id} required {value} on:input>
    <label for="{id}">{label}</label>
</div>