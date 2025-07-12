import * as z from 'zod/v4';

export const formSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.email().trim().toLowerCase(),
    object: z.enum(['job', 'freelance', 'collaboration', 'other']),
    message: z.string().min(20).max(500),
});
