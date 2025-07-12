import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { sendContactEmail } from '$lib/server/email';
import { formSchema } from '$lib/features/contact/formValidation';
import { m } from '$lib/paraglide/messages';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const form = {
            name: formData.get('name')?.toString(),
            email: formData.get('email')?.toString(),
            object: formData.get('object')?.toString(),
            message: formData.get('message')?.toString(),
        };

        const safeParse = formSchema.safeParse(form);

        if (!safeParse.success) {
            return fail(400, {
                issues: safeParse.error.issues,
                success: false,
                ...form,
            });
        }

        try {
            await sendContactEmail(safeParse.data);
            return { success: true };
        } catch (err) {
            console.error(m.contact_fail, err instanceof Error ? err.message : err);
            return fail(500, {
                error: m.contact_fail,
                success: false,
                ...form,
            });
        }
    },
};
