<script lang="ts">
    import { SOCIAL_NETWORKS } from '$lib/data/socials';
    import ThemeImage from './ThemeImage.svelte';

    export let networks: string[] = [];
</script>

<div class="social-icons z-0 mt-5 mr-5 flex h-10 w-20 items-center justify-center gap-3">
    {#each networks as key}
        {#if SOCIAL_NETWORKS[key]}
            <a
                href={SOCIAL_NETWORKS[key].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
            >
                <ThemeImage
                    name={key}
                    alt={key}
                    isThemed={SOCIAL_NETWORKS[key].isThemed ?? false}
                    className="w-7 cursor-pointer transition-transform hover:scale-125"
                />
            </a>
        {/if}
    {/each}
</div>
