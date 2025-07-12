import { Resend } from 'resend';
import { RESEND_API_KEY, DEV_CONTACT_EMAIL } from '$env/static/private';
import { contactObjectLabels } from '$lib/features/contact/contactObjectLabels';

const resend = new Resend(RESEND_API_KEY);

export async function sendContactEmail({
    name,
    email,
    object,
    message,
}: {
    name: string;
    email: string;
    object: string;
    message: string;
}) {
    const translatedObject = contactObjectLabels[object]?.() ?? object;

    return resend.emails.send({
        from: `${name} <onboarding@resend.dev>`,
        to: DEV_CONTACT_EMAIL,
        subject: `💼 PORTFOLIO: ${translatedObject} - FROM: ${name}, <${email}>`,
        replyTo: `${email}`,
        text: message,
    });
}
