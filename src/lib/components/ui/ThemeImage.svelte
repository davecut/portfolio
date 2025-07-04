<script lang="ts">
    import { onMount } from 'svelte';
    import { theme } from '$lib/stores/theme';

    export let srcDark: string;
    export let srcLight: string;
    export let alt = '';
    export let className = '';

    let currentSrc = '';
    let mounted = false;

    onMount(() => {
        const unsubscribe = theme.subscribe(($theme) => {
            currentSrc = $theme === 'dark' ? srcDark : srcLight;
            mounted = true;
        });
        return unsubscribe;
    });
</script>

{#if mounted}
    <img src={currentSrc} {alt} class={className} />
{/if}
