<script lang="ts">
    import { enhance } from '$app/forms';
    import { contactObjectLabels } from '$lib/features/contact/contactObjectLabels';
    import { m } from '$lib/paraglide/messages';
    import type { ActionResult } from '@sveltejs/kit';

    import ContactInput from './fields/ContactInput.svelte';
    import ContactSelect from './fields/ContactSelect.svelte';
    import ContactTextarea from './fields/ContactTextarea.svelte';
    import FormStatus from './FormStatus.svelte';

    export let data: {
        success?: boolean;
        error?: string;
        issues?: { path: string[]; message: string }[];
        name?: string;
        email?: string;
        object?: string;
        message?: string;
    };

    let formEl: HTMLFormElement;
    let isSubmitting = false;
    let success = false;
    let error: string | null = null;
    let fieldErrors: Record<string, string> = {};

    type ContactFormState = {
        name: string;
        email: string;
        object: string;
        message: string;
    };

    let formState: ContactFormState = {
        name: data.name ?? '',
        email: data.email ?? '',
        object: data.object ?? '',
        message: data.message ?? '',
    };

    const clearFieldError = (field: keyof typeof fieldErrors) => {
        fieldErrors[field] = '';
    };

    function handleSubmit() {
        return ({ formElement }: { formElement: HTMLFormElement }) => {
            isSubmitting = true;
            error = null;
            success = false;
            fieldErrors = {};
            console.log(fieldErrors);

            return async ({ result }: { result: ActionResult }) => {
                isSubmitting = false;

                if (result.type === 'success') {
                    success = true;
                    formElement.reset();
                    formState = { name: '', email: '', object: '', message: '' };
                } else if (result.type === 'failure') {
                    success = false;
                    error = result.data?.error ?? m.contact_fail();

                    formState = {
                        name: result.data?.name ?? '',
                        email: result.data?.email ?? '',
                        object: result.data?.object ?? '',
                        message: result.data?.message ?? '',
                    };

                    if (Array.isArray(result.data?.issues)) {
                        error = null;
                        for (const issue of result.data.issues) {
                            if (issue.path?.[0]) {
                                fieldErrors[issue.path[0]] = issue.message;
                            }
                        }
                    }
                }
            };
        };
    }

    const objectOptions = Object.entries(contactObjectLabels).map(([value, labelFn]) => ({
        value,
        label: labelFn(),
    }));
</script>

<FormStatus
    {isSubmitting}
    {success}
    {error}
    messages={{
        waiting: m.contact_message_waiting(),
        sent: m.contact_message_sent(),
    }}
/>

{#if !success && !isSubmitting}
    <form
        method="POST"
        bind:this={formEl}
        use:enhance={handleSubmit()}
        class="flex w-full flex-col items-center gap-8 py-4"
    >
        <ContactInput
            name="name"
            type="text"
            value={formState.name}
            placeholder={m.contact_name()}
            error={fieldErrors.name}
            onClear={() => clearFieldError('name')}
        />

        <ContactInput
            name="email"
            type="email"
            value={formState.email}
            placeholder={m.contact_email()}
            error={fieldErrors.email}
            onClear={() => clearFieldError('email')}
        />

        <ContactSelect
            name="object"
            value={formState.object}
            placeholder={m.contact_object()}
            options={objectOptions}
            error={fieldErrors.object}
            onClear={() => clearFieldError('object')}
        />

        <ContactTextarea
            name="message"
            value={formState.message}
            placeholder={m.contact_message()}
            error={fieldErrors.message}
            onClear={() => clearFieldError('message')}
        />

        <button
            type="submit"
            class="w-full cursor-pointer rounded-3xl bg-(--color-accent-primary) p-4 text-center text-sm font-semibold tracking-widest text-(--color-text-cta) hover:bg-(--color-accent-secondary) hover:text-(--color-text-cta-hover)"
        >
            {m.contact_send().toUpperCase()}
        </button>
    </form>
{/if}
