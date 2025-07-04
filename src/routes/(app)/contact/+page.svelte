<script>
    import { m } from '$lib/paraglide/messages';
</script>

<div class="relative mx-auto flex w-full max-w-xl flex-col items-center">
    <img src="./icons/letter.png" alt="letter" class="w-50" />
    <form action="" class="flex w-full flex-col items-center gap-8 py-4">
        <h2 class="text-2xl font-semibold uppercase">{m.contact_title()}</h2>
        <div class="flex w-full flex-col">
            <!-- <label for="name">{m.contact_name()}</label> -->
            <input
                type="text"
                name="name"
                required
                class="w-full rounded-lg bg-(--color-bg-tertiary) p-4 focus:outline-2 focus:outline-offset-6 focus:outline-(--color-accent-primary)"
                placeholder={m.contact_name()}
            />
        </div>

        <div class="flex w-full flex-col">
            <!-- <label for="email">{m.contact_email()}</label> -->
            <input
                type="email"
                name="email"
                required
                class="w-full rounded-lg bg-(--color-bg-tertiary) p-4 focus:outline-2 focus:outline-offset-6 focus:outline-(--color-accent-primary)"
                placeholder={m.contact_email()}
            />
        </div>

        <div class="flex w-full flex-col">
            <!-- <label for="message">{m.contact_message()}</label> -->
            <textarea
                name="message"
                required
                class="min-h-50 w-full rounded-lg bg-(--color-bg-tertiary) p-4 focus:outline-2 focus:outline-offset-6 focus:outline-(--color-accent-primary)"
                placeholder={m.contact_message()}
            ></textarea>
        </div>
        <button
            type="submit"
            class="w-full cursor-pointer rounded-3xl bg-(--color-accent-primary) p-4 text-center text-sm font-semibold tracking-widest text-(--color-text-cta) hover:bg-(--color-accent-secondary) hover:text-(--color-text-cta-hover)"
            >{m.contact_send().toUpperCase()}</button
        >
    </form>
</div>
