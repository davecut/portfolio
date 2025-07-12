import { m } from '$lib/paraglide/messages';

export const contactObjectLabels: Record<string, () => string> = {
    job: m.contact_object_job,
    freelance: m.contact_object_freelance,
    collaboration: m.contact_object_collaboration,
    other: m.contact_object_other,
};
