import { getGithubProjectUrl } from '$lib/config/github';
import { m } from '$lib/paraglide/messages';

export const projects = {
    portfolio: {
        label: 'Portfolio',
        description: m.projects_portfolio_description(),
        image: './projects/portfolio.png',
        stack: ['svelte', 'typescript'],
        link: '#',
        github_link: getGithubProjectUrl('portfolio'),
        status: m.projects_status_wip(),
    },
    evjf: {
        label: 'EVJF',
        description: m.projects_evjf_description(),
        image: './projects/evjf.png',
        stack: ['svelte', 'typescript'],
        link: 'https://evjf-indol.vercel.app/',
        github_link: getGithubProjectUrl('EVJF'),
        status: m.projects_status_completed(),
    },
};
