import { m } from '$lib/paraglide/messages';

export const projects = {
    portfolio: {
        label: 'Portfolio',
        description: m.projects_portfolio_description(),
        image: './projects/portfolio.png',
        stack: ['svelte', 'typescript'],
        link: '#',
        github_link: '',
        status: m.projects_status_wip(),
    },
    evjf: {
        label: 'EVJF',
        description: m.projects_evjf_description(),
        image: './projects/evjf.png',
        stack: ['svelte', 'typescript'],
        link: 'https://evjf-indol.vercel.app/',
        github_link: 'https://github.com/davecut/EVJF',
        status: m.projects_status_completed(),
    },
    // finflow: {
    //     label: 'FinFlow',
    //     description: m.projects_finflow_description(),
    //     image: '',
    //     stack: ['expo', 'laravel', 'mysql'],
    //     link: '#',
    //     github_link: 'https://github.com/davecut/finflow-api',
    //     status: m.projects_status_wip(),
    // },
};
