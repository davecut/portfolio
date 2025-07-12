<script lang="ts">
    export let isSubmitting: boolean = false;
    export let success: boolean = false;
    export let error: string | null = null;
    export let messages: {
        waiting: string;
        sent: string;
    };
</script>

{#if isSubmitting}
    <div class="flex max-h-6 justify-center gap-2">
        <img src="./icons/loading.png" alt="loading" class="object-contain" />
        <p class="animate-pulse text-sm text-(--color-text-secondary)">
            {messages.waiting}
        </p>
    </div>
{/if}

{#if success}
    <div class="flex max-h-6 justify-center gap-2">
        <img src="./icons/success.png" alt="success" class="object-contain" />
        <p class="text-(--color-status-success)">{messages.sent}</p>
    </div>
{/if}

{#if error}
    <div class="flex max-h-6 justify-center gap-2">
        <img src="./icons/error.png" alt="error" class="object-contain" />
        <p class="text-(--color-status-error)">{error}</p>
    </div>
{/if}
