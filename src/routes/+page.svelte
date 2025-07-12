<script lang="ts">
    import { goto } from '$app/navigation';
    import SocialIcons from '$lib/components/ui/SocialIcons.svelte';
    import { m } from '$lib/paraglide/messages';
</script>

<div class="relative container flex justify-center self-center">
    <div class="content relative flex h-[80vh] w-full max-w-[60rem] justify-between">
        <div
            class="splash-container absolute flex h-full w-full flex-col items-center justify-center"
        >
            <img
                src="./splash-custom.png"
                alt="splash-art"
                loading="lazy"
                class="splash will-change-opacity -left-10 -z-15 min-w-[20rem] rounded-full will-change-transform max-sm:w-[25rem] sm:-top-10 md:absolute md:-left-20 md:w-2/3"
            />
        </div>
        <div
            class="texts-container flex h-full w-full flex-col items-end text-right md:justify-center"
        >
            <div class="intro-text flex flex-col items-end pr-5 tracking-wide md:gap-1">
                <span class="name text-2xl font-semibold text-(--color-text-primary) md:text-4xl"
                    >{m.home_hello()} {m.home_introduction()}</span
                >

                <span
                    class="profession animate-pulse justify-end text-2xl font-semibold text-(--color-accent-primary) md:text-4xl"
                    >{m.home_job()}</span
                >
                <span
                    class="description w-[75%] text-justify text-right text-sm font-normal text-(--color-text-secondary) sm:w-[50%] sm:text-base md:text-xl"
                    >{m.home_description()}</span
                >
            </div>
            <div
                class="buttons w-content bottom-10 mt-5 flex items-center justify-end gap-3 pr-4 text-[10px] tracking-widest text-(--color-text-cta) max-md:flex-col max-sm:absolute max-sm:w-full md:pr-5"
            >
                <button
                    type="button"
                    aria-label={m.projects()}
                    onclick={() => goto('/projects')}
                    class="projects-button z-0 w-[14rem] cursor-pointer rounded-3xl bg-(--color-accent-primary) py-2 text-center text-sm font-semibold text-(--color-text-cta) uppercase hover:bg-(--color-accent-secondary) hover:text-(--color-text-cta-hover) md:w-[12rem]"
                    >{m.projects()}</button
                >
                <button
                    type="button"
                    aria-label={m.contact()}
                    onclick={() => goto('/contact')}
                    class="contacts-button z-0 w-[14rem] cursor-pointer rounded-3xl border-2 border-(--color-accent-secondary) py-2 text-center text-sm font-semibold text-(--color-text-cta) uppercase hover:bg-(--color-accent-secondary) hover:text-(--color-text-cta-hover) md:w-[12rem]"
                    >{m.contact()}
                </button>
            </div>
            <SocialIcons networks={['linkedin', 'github']} />
        </div>
    </div>
</div>
