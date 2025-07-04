<script>
    import { stacks } from '$lib/data/icons';
    import { m } from '$lib/paraglide/messages';
    import { groupStacksByCategory } from '$lib/utils/groupStacksByCategory';

    const groupedStacks = groupStacksByCategory(stacks);
    const categoryOrder = ['Backend', 'Frontend', 'Tools'];
</script>

<div class="container mx-auto my-8 flex flex-col">
    <div class="content flex flex-col gap-8 text-center">
        <div class="about-developer flex flex-col items-center gap-4">
            <h1
                class="about-developer-title text-3xl font-semibold tracking-wide text-(--color-text-primary) uppercase"
            >
                {m.about_developer_title()}
            </h1>
            <div class="about-developer-content flex flex-col gap-4 text-justify">
                <p>{m.about_developer_1()}</p>
                <p>{m.about_developer_2()}</p>
                <p>{m.about_developer_3()}</p>
                <p>{m.about_developer_4()}</p>
            </div>
        </div>
        <div class="about-stack flex flex-col items-center gap-4">
            <h1
                class="about-stack-title text-3xl font-semibold tracking-wide text-(--color-text-primary) uppercase"
            >
                {m.about_stack_title()}
            </h1>
            <div class="about-stack-content flex flex-col items-center gap-12">
                {#each categoryOrder as category}
                    {#if groupedStacks[category]}
                        <div class="about-stack-category-section flex flex-col items-center gap-3">
                            <h2
                                class="about-stack-category-title text-xl font-semibold tracking-widest text-(--color-accent-primary)"
                            >
                                {category}:
                            </h2>
                            <div class="about-stack-list flex flex-wrap justify-center gap-12">
                                {#each groupedStacks[category] as stack}
                                    <a
                                        class="stack-item group relative flex h-16 w-16 flex-col items-center"
                                        href={stack.link}
                                        target="_blank"
                                    >
                                        <div
                                            class="relative h-full w-full transition duration-300 ease-in-out hover:scale-120 hover:shadow-2xl"
                                        >
                                            <img
                                                src={stack.icon}
                                                alt={stack.label}
                                                class=" absolute h-full w-full"
                                            />
                                            <div
                                                class="absolute -z-1 h-full w-full rounded-full bg-(--color-accent-primary) opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                                            ></div>
                                        </div>
                                    </a>
                                {/each}
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</div>
