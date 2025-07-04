<script lang="ts">
    import { m } from '$lib/paraglide/messages';

    export let project;

    const statusClassMap = {
        [m.projects_status_completed()]: 'bg-(--color-status-success)',
        [m.projects_status_wip()]: 'bg-(--color-status-warning)',
    };

    function getStatusClass(status: string) {
        return statusClassMap[status] ?? 'bg-(--color-status-info)';
    }
</script>

<div
    class={`h-content w-content absolute -top-3 right-2 rounded-full px-3 font-semibold ${getStatusClass(project.status)} text-(--color-text-dark)`}
>
    {project.status}
</div>
