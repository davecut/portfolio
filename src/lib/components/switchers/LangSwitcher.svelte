<script lang="ts">
    import { getLocale, isLocale, locales, setLocale } from '$lib/paraglide/runtime';
    import { onClickOutside } from '$lib/utils/dom';

    export let isDropdown: boolean = false;

    const availableLanguages = locales.map((code) => ({
        code,
        flag: `/icons/lang/${code}.png`,
    }));

    let currentLang = getLocale();
    let isOpen = false;

    function toggleDropdown() {
        isOpen = !isOpen;
    }

    function closeDropdown() {
        isOpen = false;
    }

    function selectLanguage(lang: string) {
        if (lang === currentLang) return;
        if (isLocale(lang)) {
            setLocale(lang);
            currentLang = lang;
            isOpen = false;
        }
    }
</script>

{#if isDropdown}
    <div class="relative inline-block text-left" use:onClickOutside={closeDropdown}>
        <button
            class="flex items-center justify-center gap-2 rounded-md border border-(--color-surface-border) bg-(--color-bg-secondary) px-6 py-2 text-sm shadow-md hover:bg-(--color-bg-tertiary)"
            on:click={toggleDropdown}
        >
            <img src={`/icons/lang/${currentLang}.png`} alt={`Current language: ${currentLang}`} />
            <span class="uppercase">{currentLang}</span>
        </button>
        {#if isOpen}
            <ul
                class="absolute z-50 mt-2 w-full rounded-md border border-(--color-surface-border) bg-(--color-bg-secondary) shadow-lg"
            >
                {#each availableLanguages as lang}
                    <li>
                        <button
                            class="flex w-full items-center justify-center gap-2 px-6 py-2 text-sm hover:bg-(--color-bg-tertiary)"
                            class:font-bold={lang.code === currentLang}
                            on:click={() => selectLanguage(lang.code)}
                        >
                            <img src={lang.flag} alt={lang.code} />
                            <span class="uppercase">{lang.code}</span>
                        </button>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
{:else}
    {#each availableLanguages as lang}
        <button
            class="h-fit grayscale-[75%] filter transition hover:grayscale-0"
            class:active={lang.code === getLocale()}
            on:click={() => selectLanguage(lang.code)}
        >
            <img src={lang.flag} alt={`Flag for ${lang.code}`} />
        </button>
    {/each}
{/if}

<style>
    .active {
        filter: grayscale(0);
        box-shadow: 1px 1px 15px var(--color-accent-primary);
    }
</style>
