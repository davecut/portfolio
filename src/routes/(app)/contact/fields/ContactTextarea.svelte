<script lang="ts">
    import FieldError from './FieldError.svelte';

    export let name: string;
    export let value: string;
    export let placeholder: string;
    export let error: string;
    export let onClear: () => void;
</script>

<div class="flex w-full flex-col">
    <textarea
        bind:value
        on:input={onClear}
        {name}
        {placeholder}
        required
        class={`min-h-50 w-full rounded-lg bg-(--color-bg-tertiary) p-4 ${error ? 'outline outline-2 outline-(--color-status-error)' : 'focus:outline-2 focus:outline-(--color-accent-primary)'}`}
    ></textarea>

    {#if error}
        <FieldError {error} />
    {/if}
</div>
