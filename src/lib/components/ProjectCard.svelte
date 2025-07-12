<script lang="ts">
    import { stacks } from '$lib/data/icons';
    import { m } from '$lib/paraglide/messages';
    import StatusTag from './StatusTag.svelte';

    export let project;

    function getStackByKey(key: string): (typeof stacks)[keyof typeof stacks] | undefined {
        if (key in stacks) {
            return stacks[key as keyof typeof stacks];
        }
    }
</script>

<div class="flex justify-center gap-10 px-3">
    <div
        class="project-card flex h-[20rem] w-[20rem] flex-col gap-2 rounded-md bg-(--color-bg-secondary) px-3 py-5 md:h-[25rem] lg:w-[25rem]"
    >
        <div class="project-imageContainer relative h-full w-full">
            <a href={project.link} target="_blank">
                <img
                    class="project-image h-full w-full rounded-b-md bg-center object-cover"
                    src={project.image}
                    alt={project.label}
                />
            </a>
            {#if project.status === m.projects_status_wip()}
                <StatusTag {project} />
            {/if}
        </div>
        <div class="project-text flex flex-col justify-center gap-y-1">
            <div class="main-title text-2xl font-semibold text-(--color-text-primary)">
                {project.label}
            </div>
            <div class="sub-title text-xs font-light tracking-wider text-(--color-text-secondary)">
                {project.description}
            </div>
        </div>
        <div class="buttons flex h-8 w-full justify-between gap-2 text-[12px]">
            <a class="w-content" href={project.github_link} target="_blank">
                <button
                    class="h-full w-full cursor-pointer rounded-3xl bg-(--color-accent-primary) px-4 text-center font-semibold tracking-widest whitespace-nowrap text-(--color-text-cta) hover:bg-(--color-accent-secondary) hover:text-(--color-text-cta-hover)"
                >
                    {m.projects_view_github()}
                </button>
            </a>
            <div class="stack-icons w-content flex h-full justify-end gap-2">
                {#each project.stack as stack}
                    <a href={getStackByKey(stack)?.link}>
                        <img
                            src={getStackByKey(stack)?.icon}
                            alt={getStackByKey(stack)?.label}
                            class="h-full"
                            data-tooltip={getStackByKey(stack)?.label}
                        />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>
