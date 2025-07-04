<script lang="ts">
    import { theme } from '$lib/stores/theme';
    import { onMount } from 'svelte';
    import '../app.css';
    import Navbar from '$lib/components/navbar/Navbar.svelte';

    let { children } = $props();

    const loadThemeCss = (theme: string) => {
        const id = 'theme-link';
        let link = document.getElementById(id) as HTMLLinkElement | null;
        if (!link) {
            link = document.createElement('link');
            link.id = id;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
        link.href = `/theme/${theme}.css`;
    };

    onMount(() => {
        const unsubscribe = theme.subscribe(loadThemeCss);
        return () => unsubscribe();
    });
</script>

<Navbar />
<div class="flex min-h-[calc(100vh-10rem)] justify-center">
    {@render children()}
</div>
