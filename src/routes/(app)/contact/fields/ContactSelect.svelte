<script lang="ts">
    import FieldError from './FieldError.svelte';

    export let name: string;
    export let value: string;
    export let placeholder: string;
    export let options: { value: string; label: string }[] = [];
    export let error: string;
    export let onClear: () => void;
</script>

<div class="flex w-full flex-col">
    <select
        bind:value
        on:input={onClear}
        {name}
        required
        class={`w-full cursor-pointer rounded-lg bg-(--color-bg-tertiary) p-4 ${error ? 'outline outline-2 outline-(--color-status-error)' : 'focus:outline-2 focus:outline-(--color-accent-primary)'}`}
    >
        <option value="" disabled selected>{placeholder}</option>
        {#each options as { value: optValue, label }}
            <option value={optValue}>{label}</option>
        {/each}
    </select>

    {#if error}
        <FieldError {error} />
    {/if}
</div>
