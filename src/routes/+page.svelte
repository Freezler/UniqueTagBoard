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
	let tagCount = 0; // Initialize tagCount

	const updateTagCount = () => {
		tagCount = tags.length;
	};

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

		updateTagCount(); // Initial count calculation
	});

	$: updateTagCount(); // Update tagCount whenever tags change

	function handleDuplicate() {
		alert('Tag already exists');
		tags = [...tags, value];
		tags.sort((a, b) => a.localeCompare(b));
		localStorage.setItem('tags', JSON.stringify(tags));
		input.classList.add('border-red-600');
		input.value = '';
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
				input.classList.add('border-red-600');
				input.value = '';
				tags.sort((a, b) => a.localeCompare(b));
			} else {
				input.classList.toggle('border-red-600');
				handleDuplicate();
			}
			input.value = '';
			input.classList.toggle('border-red-600');
		}
		localStorage.setItem('tags', JSON.stringify(tags));
		tagCount = tags.length;
	}

	function remove(target) {
		tags = tags.filter((tag) => target !== tag);
		tagCount = tags.length;
	}

	const resetTags = () => {
		tags = [...defaultTags];
		localStorage.setItem('tags', JSON.stringify(tags));
		tagCount = tags.length;
	};

	const clearBoard = () => {
		tags = [];
		tagCount = tags.length;
	};
</script>

<body
	class="grid h-[100vh] scroll-none transition-all duration-300 select-none bg-transparent bg-[linear-gradient(145deg,rgba(1,4,5,0.99),rgba(3,7,8,0.9))]"
>
	<header
		class="grid place-items-center grid-cols-1 text-center"
	>
		<h1
			class="lg:text-[3.8rem] text-[1.8rem] text-[hsla(187,45%,84%,1)] font-bold"
		>
			Unique Tag Board
		</h1>
		<p
			class="text-[clamp(0.8rem,2vw,1rem)] text-[var(--text-color)] font-semibold w-[35ch] text-pretty text-center pb-4"
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
		class="smooth-scroll flex flex-col m-0 mt-0 w-[100%]"
	>
		<label for="add-tag-input" class="tag-input">
			<div
				use:autoAnimate={{
					duration: 420, // animation duration in milliseconds
					easing: 'ease-in-out', // animation easing
					delay: 0, // animation delay in milliseconds
					direction: 'alternate', // whether the animation should only play once
				}}
				class="overflow-scroll flex flex-row flex-wrap items-center justify-around w-[88vw] gap-2 h-[44vh] p-4 border-[4px]"
			>
				{#each tags as tag, index (tag)}
					<div
						id="gradient"
						class="tag bg-transparent grid select-none rounded-[var(--border-radius)] text-center items-center outline-none"
					>
						<button
							class="text-white hover:bg-gray-100 text-center font-semibold py-1 justify-between px-1 border-[1px] rounded-[var(--border-radius)] border-gray-400 shadow grid-cols-[1fr_40px] grid place-items-center text-lg pl-3"
							><p
								class="text-[var(--text-color)] -translate-y-[0px]"
							>
								{tag}
							</p>
							<svg
								class="select-none place-self-center justify-self-end mr-2 h-[18px] w-[16px] fill-none stroke-width-3 stroke-[hsla(187,45%,84%,1)]"
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
				class="flex items-center justify-center flex-wrap box-border pt-2 mb-2 mt-8 h-[138px] rounded-[var(--border-radius)] border-[3px] w-[88vw] sm:w-[80vw] md:w-[420px] lg:w-[420px] border-[hsla(187,45%,84%,1)] text-[var(--text-color)]"
			>
				<input
					class="rounded-[var(--border-radius)] border-[1px] lowercase text-xs w-[50%] ml-2 pl-2 h-[40px] text-[var(--input-color)] m-[0px] box-border"
					id="add-tag-input"
					type="text"
					placeholder="Add a tag..."
					on:keydown={addItem}
				/>

				<button
					class="pl-2 pr-2 h-[40px] text-[var(--text-color)] m-[8px] box-border rounded-[var(--border-radius)] border-lime-700 border-[2px]"
					type="button"
					name="add-tag-submit"
					aria-label="Add tag"
					id="add-tag-submit"
					on:keydown={(e) => e.key === 'Enter' && addItem()}
					on:click={addItem}>Add</button
				>
				<button
					class=" pl-2 pr-2 h-[40px]
					bg-[var(--btn-bg-color)] text-[var(--text-color)] box-border rounded-[var(--border-radius)] border-red-400 border-[2px]"
					on:click={resetTags}
				>
					Reset
				</button>
				<button
					class="pl-2 pr-2 h-[40px] mb-16 text-[var(--text-color)] m-[5px] box-border rounded-[var(--border-radius)] border-purple-600 border-[2px]"
					on:click={clearBoard}>Clear Board</button
				>
			</div>
			<h3>number of tags on your board {tagCount}</h3>
		</label>
	</section>
</body>

<style>
	:root {
		--text-color: hsl(165, 57%, 86%);
		--input-color: rgb(78, 87, 88);
		--bg-color: hsla(0, 0%, 0%, 1);
		--btn-bg-color: #08075aaf;
		--border-radius: 30px;
		--highlight-color: hsla(296, 70%, 57%, 0.39);
		margin: 0;
		padding: 0;
	}
	button {
		background-color: var(--btn-bg-color);
		box-shadow:
			0 0 5px rgba(213, 219, 220, 0.533),
			0 0 25px rgba(3, 77, 81, 0.533),
			0 0 50px rgba(3, 77, 81, 0.533) 0 0 100px
				rgba(3, 77, 81, 0.533);
	}

	button:active {
		box-shadow:
			inset -2px -2px 3px rgba(255, 255, 255, 0.6),
			inset 2px 2px 3px rgba(0, 0, 0, 0.6);
		scale: 0.95;
		outline: none;
	}

	button:hover {
		background-color: rgba(36, 23, 219, 0.482);
		box-shadow:
			0 0 0px rgb(217, 196, 215),
			0 0 42px var(--highlight-color),
			0 0 28px var(--highlight-color),
			0 0 76px var(--highlight-color);
		transition: all 0.1s ease-out;
	}

	div {
		border-image: linear-gradient(
			145deg,
			#f2189e 0%,
			#6650e6 50%,
			#4e0a76 100%
		);
		transition: transform 0.3s ease-in-out;
		border-image-slice: 1;
		border-color: transparent;
	}

	div.tag:hover {
		transform: scale(1.05);
	}

	div::-webkit-scrollbar {
		width: 4px;
		height: 0px;
	}

	div::-webkit-scrollbar-thumb {
		background-image: linear-gradient(
			135deg,
			#4e0a76 0%,
			#f2189e 100%
		);
		border-radius: 50px;
	}

	a,
	h1,
	h3 {
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(
			45deg,
			#f2189e,
			#6650e6
		);
	}

	svg:hover {
		transform: rotate(90deg);
		transition: transform 0.3s ease-in-out;
		outline: none;
	}

	#gradient {
		background: transparent;
		background: linear-gradient(
			135deg,
			rgba(63, 94, 251, 1) 0%,
			rgba(252, 70, 107, 0.7) 100%
		);
		border-radius: var(--border-radius);
		margin: 0;
		padding: 2px;
	}

	#gradient:hover {
		scale: 1.02;
	}
	.tag-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: var(--border-radius);
		max-width: inherit;

		transition: all 0.9s ease-in-out;
	}

	svg, path {
		transition: all 0.6s cubic-bezier(0.95, 0.05, 0.795, 0.035);
	}
</style>
