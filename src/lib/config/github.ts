export const BASE_GITHUB_URL = 'https://github.com/davecut';

export function getGithubProjectUrl(project: string): string {
    return `${BASE_GITHUB_URL}/${project}`;
}
