<script lang="ts">
    import { m } from '$lib/paraglide/messages';
    import ContactForm from './ContactForm.svelte';

    export let data;
</script>

<div class="relative mx-auto flex w-full max-w-xl flex-col items-center gap-4">
    <img src="./icons/letter.png" alt="letter" class="w-50" />
    <h2 class="text-2xl font-semibold uppercase">{m.contact_title()}</h2>
    <ContactForm {data} />
</div>
