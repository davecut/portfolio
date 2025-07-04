import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const getInitialTheme = (): string => {
    if (!browser) return 'dark';
    return localStorage.getItem('theme') ?? 'dark';
};

export const theme = writable<string>(getInitialTheme());

if (browser) {
    theme.subscribe((value) => {
        document.documentElement.setAttribute('data-theme', value);
        localStorage.setItem('theme', value);
    });
}
