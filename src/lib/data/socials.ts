import { BASE_GITHUB_URL } from '$lib/config/github';
import { LINKEDIN_URL } from '$lib/config/linkedin';

export type SocialNetwork = {
    name: string;
    url: string;
    isThemed?: boolean;
};

export const SOCIAL_NETWORKS: Record<string, SocialNetwork> = {
    github: {
        name: 'GitHub',
        url: BASE_GITHUB_URL,
        isThemed: true,
    },
    linkedin: {
        name: 'LinkedIn',
        url: LINKEDIN_URL,
    },
};
