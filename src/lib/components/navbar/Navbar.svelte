<script lang="ts">
    import ThemeSwitcher from '../switchers/ThemeSwitcher.svelte';
    import { Hamburger } from 'svelte-hamburgers';
    import { fly } from 'svelte/transition';
    import { m } from '$lib/paraglide/messages';
    import LangSwitcher from '../switchers/LangSwitcher.svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import ThemeImage from '../ui/ThemeImage.svelte';

    let open = $state(false);

    const navTabs = [
        { label: m.home(), path: '/' },
        { label: m.projects(), path: '/projects' },
        { label: m.about(), path: '/about' },
        { label: m.contact(), path: '/contact' },
    ];

    function handleNavigation(path: string) {
        open = !open;
        return goto(path);
    }
</script>

<nav
    class="sticky top-0 z-9999 flex h-20 items-center justify-stretch border-[--color-surface-border] px-10"
>
    <div
        class="bg-opacity-30 absolute top-0 left-0 z-[-2] h-full w-full bg-[--color-bg-secondary] backdrop-blur-lg backdrop-filter will-change-transform"
    ></div>
    <button
        class="flex h-full cursor-pointer items-center justify-center object-contain"
        onclick={() => handleNavigation('/')}
    >
        <ThemeImage
            srcDark="/icons/logo-dark.png"
            srcLight="/icons/logo-light.png"
            alt="logo"
            className="h-full w-full object-contain"
        />
    </button>
    <div
        class="flex w-full items-center justify-center gap-4 space-x-4 text-(--color-text-primary)"
    >
        {#each navTabs as { label, path }}
            <a href={path} class="nav-link hidden text-xl">
                <h2
                    class={(page.url.pathname =
                        path ?? 'text-shadow-[0_35px_35px_(--color-accent-cta))]')}
                >
                    {label}
                </h2>
            </a>
        {/each}
    </div>
    <div class="flex items-center">
        <div class="switchers-container flex items-center gap-4 lg:gap-8">
            <div class="lang-switcher hidden gap-4">
                <LangSwitcher />
            </div>
            <div class="theme-switcher hidden">
                <ThemeSwitcher />
            </div>
        </div>

        <div class="hamburger-menu z-20 flex items-center justify-center">
            <Hamburger
                bind:open
                type="collapse"
                title="Toggle nav links"
                ariaControls="nav"
                --color="var(--color-text-primary)"
            />
            {#if open}
                <ul
                    id="hamburger-menu"
                    class="menu bg-opacity-30 absolute top-20 right-0 z-9999 flex h-[calc(100vh-5rem)] w-min flex-col gap-4 bg-[--color-bg-secondary] p-10 backdrop-blur-lg backdrop-filter"
                    transition:fly={{ x: 100 }}
                >
                    {#each navTabs as { label, path }}
                        <button
                            class="ml-16 cursor-pointer self-end text-xl font-semibold whitespace-nowrap text-(--color-text-primary)"
                            onclick={() => handleNavigation(path)}
                        >
                            <h2 class="text-(--color-text-primary) text-shadow-sm">
                                {label}
                            </h2>
                        </button>
                    {/each}
                    <div class="mt-auto flex justify-center gap-4">
                        <LangSwitcher />
                    </div>

                    <div class="mt-auto mb-20 flex self-end justify-self-end">
                        <ThemeSwitcher />
                    </div>
                </ul>
            {/if}
        </div>
    </div>
</nav>

<style>
    @media (min-width: 768px) {
        .hamburger-menu {
            display: none;
        }

        .nav-link,
        .theme-switcher {
            display: flex;
        }
        .lang-switcher {
            display: flex;
        }
    }
</style>
