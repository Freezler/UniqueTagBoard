import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let tags = [
	'Svelte',
	'SvelteKit',
	'TailwindCSS',
	'Netlify',
	'Prettier',
	'ESLint',
	'Vite',
	'VSCode',
	'GitHub',
	'NPM',
	'Vercel',
	'Figma',
	'AutoAnimate'
];
const initialValue = browser
	? window.localStorage.getItem('tags') ?? tags
	: t;

const theme = writable<string>(initialValue);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('tags', value);
	}
});

export default theme;
