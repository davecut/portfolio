<script lang="ts">
    import { getLocale, isLocale, locales, setLocale } from '$lib/paraglide/runtime';

    const availableLanguages = () => {
        return locales.map((code) => ({
            code,
            flag: `/icons/lang/${code}.png`,
        }));
    };

    function setLanguage(lang: string) {
        if (lang === getLocale()) return;

        if (isLocale(lang)) {
            setLocale(lang);
        }
    }
</script>

{#each availableLanguages() as lang}
    <button
        class="h-fit grayscale-[75%] filter"
        class:active={lang.code === getLocale()}
        on:click={() => setLanguage(lang.code)}
    >
        <img src={lang.flag} alt={`Flag for ${lang.code}`} />
    </button>
{/each}

<style>
    .active {
        filter: grayscale(0);
        box-shadow: 1px 1px 15px var(--color-accent-primary);
    }
</style>
