<script lang="ts">
    import { theme } from '$lib/stores/theme';
    import { onMount } from 'svelte';

    export let name: string;
    export let alt = '';
    export let className = '';
    export let isThemed = false;

    let currentSrc = '';
    let mounted = false;

    onMount(() => {
        const unsubscribe = theme.subscribe(($theme) => {
            currentSrc =
                isThemed && $theme === 'light' ? `/icons/${name}-light.png` : `/icons/${name}.png`;
            mounted = true;
        });
        return unsubscribe;
    });
</script>

{#if mounted}
    <img {alt} class={className} src={currentSrc} />
{/if}
