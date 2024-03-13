<script>
	import { onMount } from 'svelte';

	//   Define an array of tags
	let tags = [
		'AutoAnimate',
		'AWS',
		'C',
		'C#',
		'cobolt',
		'ESLint',
		'Figma',
		'Fortran',
		'GitHub',
		'Java',
		'MongoDB',
		'Mongoose',
		'mySql',
		'Netlify',
		'NodeJS',
		'NPM',
		'Nuxt',
		'PHP',
		'Postgress',
		'Prettier',
		'Python',
		'randy',
		'React',
		'React Native',
		'Svelte',
		'SvelteKit',
		'SyntaxFM',
		'TailwindCSS',
		'Vercel',
		'VSCode',
		'Vue3'
	];

	onMount(() => {
		// Check if local storage is available
		if (localStorage) {
			// Retrieve the tags array from local storage
			let storedTags = JSON.parse(
				localStorage.getItem('tags')
			);
			if (storedTags) {
				tags = storedTags;
			}
		} else {
			// Handle the case where local storage is not available
			let tags = tags;

			// Save the tags array to local storage
			localStorage.setItem('tags', JSON.stringify(tags));
			return tags;
		}
	});

	import autoAnimate from '@formkit/auto-animate';

	function addItem(e) {
		const input = document.getElementById('add-tag-input');
		const value = input.value.trim();

		// If user has typed something and hit enter or clicked the button
		if (
			value !== '' &&
			(e.key === 'Enter' || e.type === 'click')
		) {
			// Check if the tag already exists in the array
			if (!tags.includes(value)) {
				// If it doesn't, add it to the array of tags
				tags.push(value);

				tags = tags; // Force Svelte to re-render the page with the new tag
				input.value = ''; // Clear the input field

				// Sort the tags alphabetically
				tags.sort((a, b) => a.localeCompare(b));
			} else {
				// Handle duplicate tag error
				const bg = document.querySelector('#add-tag-input');
				input.classList.add('border-red-600'); //togg = 'red';
				console.log('no duplicate tags please');
				alert('no duplicate tags please');
				return bg;
			}
			input.value = '';
			input.classList.remove('border-red-600'); //togg = 'red';
		}
		localStorage.setItem('tags', JSON.stringify(tags));
	}

	function remove(target) {
		tags = tags.filter((tag) => target !== tag);
	}
</script>

<body class="grid bg-slate-950 h-[100vh] scroll-smooth">
	<div
		class="grid place-items-center grid-cols-1 grid-rows-1 pb-2 bg-slate-900 text-center text-amber-50"
	>
		<h1
			class="text-3xl font-semibold p-2 uppercase text-[hsla(187,45%,84%,1)] text-center mb-1"
		>
			Unique Tag Board
		</h1>
		<p
			class="text-[16px] text-[hsla(187,45%,74%,1)] font-normal w-[32ch] text-pretty text-center mb-4"
		>
			A project built with <a href="https://kit.svelte.dev"
				>Svelte Kit</a
			>,
			<a href="https://tailwindcss.com">TailwindCSS </a>and
			<a href="https://auto-animate.formkit.com/"
				>Auto-animate.</a
			> allowing users to dynamically add and remove tags with
			visual animations while efficiently using available space.
		</p>
	</div>
	<section
		class="smooth-scroll bg-slate-900 flex flex-col m-0 mt-0 w-[100vw] h-[100v%]"
	>
		<label for="add-tag-input" class="tag-input">
			<ul
				use:autoAnimate={{
					duration: 600,
					easing: 'ease-in-out'
				}}
				class="overflow-scroll flex flex-row flex-wrap items-center justify-center w-[85vw] bg-pink-950/5 gap-2 h-[50vh] p-8"
			>
				{#each tags as tag, index (tag)}
					<div class="flex items-center box-border">
						<li class=" h-[32px] bg-[var(--btn-bg-color)] text-[var(--text-color)] pl-2 pr-2">
							{tag}
						</li>
						<span
							class=" h-[32px] box-border bg-blue-500 text-center pt-8 text-[var(--text-color)] rounded-tr-[0.25rem] rounded-br-[0.25rem] w-[32px]"
							tabindex="0"
							role="button"
							on:click={() => remove(tag)}
							on:keydown={(e) =>
								e.key === 'Enter' && remove(tag)}
							>&times;</span
						>
					</div>
				{/each}
			</ul>

			<div
				class="flex items-center box-border mt-8 h-[60px] rounded-xl"
			>
				<input
					class="pl-2 flex-1 h-[40px] bg-[var(--btn-bg-color)] text-[var(--text-color)] m-[5px] box-border"
					id="add-tag-input"
					type="text"
					placeholder="Add a tag..."
					on:keydown={addItem}
				/>

				<button
					class="flex-1 pl-2 pr-2 h-[40px] bg-[var(--btn-bg-color)] text-[var(--text-color)] m-[5px] box-border rounded-md"
					type="button"
					name="add-tag-submit"
					tabindex="0"
					aria-label="Add tag"
					id="add-tag-submit"
					on:keydown={(e) => e.key === 'Enter' && addItem()}
					on:click={addItem}>Add</button
				>
			</div>
		</label>
	</section>
</body>

<style>
	button:active {
		box-shadow:
			inset -2px -2px 3px rgba(255, 255, 255, 0.6),
			inset 2px 2px 3px rgba(0, 0, 0, 0.6);
		scale: 0.95;
	}

	:root {
		--text-color: hsla(300, 29%, 97%, 0.84);
		--bg-color: hsla(278, 85%, 3%, 0.714);
		--btn-bg-color: #074e5a;
		--border-radius: 0.47rem;
	}

	.tag-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: var(--border-radius);
		padding: 0.5rem;
		background-color: var(--bg-color);
		box-shadow: 0 4rem 1rem 5rem var(--bg-color);
	}

	ul::-webkit-scrollbar {
		width: 1px;
		height: 0px;
	}

	ul::-webkit-scrollbar-thumb {
		background-color: hsla(268, 95%, 42%, 0.332);
	}
</style>
