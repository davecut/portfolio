<script>
    import { page } from '$app/state';
    import { m } from '$lib/paraglide/messages';
</script>

<div class="flex flex-col items-center justify-center px-6 text-(--color-text-primary)">
    <h1 class="mb-4 text-6xl font-extrabold">{page.status}</h1>

    <p class="mb-2 text-center text-2xl font-semibold">
        {page.status === 404 ? m.error_not_found() : m.error_generic()}
    </p>

    <p class="mb-6 text-center text-lg text-(--color-text-secondary)">
        {m.error_back_home()}
    </p>

    <a
        href="/"
        class="rounded-full bg-(--color-accent-primary) px-6 py-3 font-semibold text-(--color-text-cta) shadow-lg hover:bg-(--color-accent-secondary) hover:text-(--color-text-cta-hover)"
    >
        {m.home().toUpperCase()}
    </a>
</div>
