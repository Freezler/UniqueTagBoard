<script>
	import { onMount } from 'svelte';
	import autoAnimate from '@formkit/auto-animate';

	//   Define an array of tags
	let defaultTags = [
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

	let tags = defaultTags;

	onMount(() => {
		if (localStorage) {
			let storedTags = JSON.parse(
				localStorage.getItem('tags')
			);
			if (storedTags) {
				tags = storedTags;
			}
		} else {
			localStorage.setItem('tags', JSON.stringify(tags));
			return tags;
		}
	});

	function handleDuplicate() {
		const bg = document.querySelector('#add-tag-input');
		bg.classList.add('border-red-600');
		console.log('no duplicate tags please');
		alert('no duplicate tags please');
	}

	function addItem(e) {
		const input = document.getElementById('add-tag-input');
		const value = input.value.trim();

		if (
			value !== '' &&
			(e.key === 'Enter' || e.type === 'click')
		) {
			if (!tags.includes(value)) {
				tags = [...tags, value];
				input.value = '';
				tags.sort((a, b) => a.localeCompare(b));
			} else {
				handleDuplicate();
				input.classList.add('border-red-600');
			}
			input.value = '';
			input.classList.remove('border-red-600');
		}
		localStorage.setItem('tags', JSON.stringify(tags));
	}

	function remove(target) {
		tags = tags.filter((tag) => target !== tag);
	}

	const resetTags = () => {
		tags = [...defaultTags];
		localStorage.setItem('tags', JSON.stringify(tags));
	};
</script>

<body
	class="grid bg-slate-950 h-[100vh] w-[100vw] overflow-scroll-smooth"
>
	<header
		class="grid place-items-center grid-cols-1 grid-rows-1 pb-6 bg-slate-900 text-center"
	>
		<h1
			class="text-3xl font-semibold p-2 uppercase text-[hsla(187,45%,84%,1)] text-center mb-1"
		>
			Unique Tag Board
		</h1>
		<p
			class="text-[16px] text-[hsla(187,45%,84%,1)] font-normal w-[32ch] text-pretty text-center mb-4"
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
	</header>
	<section
		class="smooth-scroll bg-slate-900 flex flex-col m-0 mt-0 w-[100vw] h-[100v%]"
	>
		<label for="add-tag-input" class="tag-input">
			<div
				use:autoAnimate={{
					duration: 300,
					easing: 'ease-in-out'
				}}
				class="overflow-scroll flex flex-row flex-wrap items-center justify-around w-[85vw] bg-slate-950/5 gap-4 h-[50vh] p-8 border-[1px] border-[hsla(187,45%,84%,1)] rounded-xl"
			>
				{#each tags as tag, index (tag)}
					<div
						id="gradient"
						class="bg-transparent grid rounded-full text-center items-center"
					>
						<button
							class="text-white hover:bg-gray-100 text-center font-semibold py-1 justify-between px-1 border-[1px] rounded-3xl border-gray-400 shadow grid-cols-[1fr_40px] grid place-items-center text-lg pl-3"
							>{tag}
							<svg
								class=" place-self-center justify-self-end mr-2 h-[18px] w-[16px] fill-none stroke-width-3 stroke-[hsla(187,45%,84%,1)]"
								viewBox="0 0 12 12"
								xmlns="http://www.w3.org/2000/svg"
								role="button"
								tabindex="0"
								aria-label="Remove tag"
								on:click={() => remove(tag)}
								on:keydown={(e) =>
									e.key === 'Enter' && remove(tag)}
								><path
									d="M6.52813 5.9999L11.4781 10.9499L10.9531 11.4749L6.00313 6.5249L1.05313 11.4749L0.528125 10.9499L5.47813 5.9999L0.453125 1.0499L0.978125 0.524902L5.92813 5.4749L10.8781 0.524902L11.4031 1.0499L6.52813 5.9999Z"
									fill="black"
								></path></svg
							></button
						>
					</div>
				{/each}
			</div>

			<div
				class="flex items-center box-border mt-8 h-[40px] rounded-xl"
			>
				<input
					class="pl-2 h-[40px] bg-[var(--btn-bg-color)] text-[var(--text-color)] m-[5px] box-border"
					id="add-tag-input"
					type="text"
					placeholder="Add a tag..."
					on:keydown={addItem}
				/>

				<button
					class="pl-2 pr-2 h-[40px] bg-[var(--btn-bg-color)] text-[var(--text-color)] m-[5px] box-border rounded-md"
					type="button"
					name="add-tag-submit"
					aria-label="Add tag"
					id="add-tag-submit"
					on:keydown={(e) => e.key === 'Enter' && addItem()}
					on:click={addItem}>Add</button
				>
				<button
					class=" pl-2 pr-2 h-[40px]
					bg-[var(--btn-bg-color)] text-[var(--text-color)] box-border rounded-md"
					on:click={resetTags}
				>
					Reset
				</button>
			</div>
		</label>
	</section>
</body>

<style>
	button {
		background-color: var(--btn-bg-color);
		box-shadow:
			0 0 5px rgba(3, 77, 81, 0.533),
			0 0 25px rgba(3, 77, 81, 0.533),
			0 0 50px rgba(3, 77, 81, 0.533) 0 0 100px
				rgba(3, 77, 81, 0.533);
	}

	button:active {
		box-shadow:
			inset -2px -2px 3px rgba(255, 255, 255, 0.6),
			inset 2px 2px 3px rgba(0, 0, 0, 0.6);
		scale: 0.95;
	}

	button:hover {
		background-color: rgba(71, 4, 85, 0.482);
		box-shadow:
			0 0 8px #ab0,
			0 0 16px rgb(122, 175, 241),
			0 0 24px rgb(122, 175, 241),
			0 0 48px rgb(122, 175, 241);
		transition: all 0.3s ease-out;
		scale: 1.05;
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
		transition: all 0.3s ease-in-out;
	}
	div {
		border-image: linear-gradient(
			135deg,
			rgb(169, 82, 157) 0%,
			rgb(16, 99, 110) 50%,
			rgb(11, 1, 36) 100%
		);
		transition: transform 0.2s ease-in-out;
		border-image-slice: 1;
		border-color: transparent;
		border-radius: var(--border-radius);
	}

	div::-webkit-scrollbar {
		width: 1px;
		height: 0px;
	}

	div::-webkit-scrollbar-thumb {
		background-image: linear-gradient(
			135deg,
			#31024c 0%,
			#f2189e 100%
		);
	}
	#gradient {
		background: rgb(63, 94, 251);
		background: linear-gradient(
			90deg,
			rgba(63, 94, 251, 1) 0%,
			rgba(252, 70, 107, 1) 100%
		);
		border-radius: 32px;
		margin: 0;
		padding: 4px;
	}

	svg:hover {
		transform: rotate(90deg);
		transition: transform 0.3s ease-in-out;
	}
</style>
