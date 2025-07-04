<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { projects } from '$lib/data/projects';
    import { m } from '$lib/paraglide/messages';
</script>

<div class="container my-8 flex flex-col">
    <p
        class="projects-title text-center text-3xl font-semibold tracking-wide text-(--color-text-primary) uppercase"
    >
        {m.projects_title()}
    </p>
    <div class="container my-8 flex flex-wrap justify-center gap-5">
        {#each Object.values(projects) as project}
            <ProjectCard {project} />
        {/each}
    </div>
</div>
