<script>
	import autoAnimate from '@formkit/auto-animate';
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
	}

	function remove(target) {
		tags = tags.filter((tag) => target !== tag);
	}
</script>

<body class="grid bg-slate-950 h-[100vh]">
	<div
		class="grid place-items-center grid-cols-1 grid-rows-1 pb-2 bg-slate-900 text-center text-amber-50"
	>
		<h1
			class="text-3xl font-semibold pb-2 uppercase text-amber-50"
		>
			Unique Tag Board
		</h1>
		<p
			class="text-[6px] text-amber-50 font-normal w-[35ch] text-pretty text-center scroll-pb-48"
		>
			A project built with Svelte Kit, TailwindCSS, and
			Auto-animate, allowing users to dynamically add and
			remove tags with visual animations.
		</p>
	</div>
	<section
		class="smooth-scroll bg-slate-900 flex flex-col m-0 mt-0"
	>
		<label for="add-tag-input" class="tag-input">
			<ul
				use:autoAnimate={{
					duration: 400,
					easing: 'ease-in-out'
				}}
				class="flex flex-row flex-wrap items-center justify-center w-[80vw] bg-slate-900 gap-2 h-[60vh] mb-8"
			>
				{#each tags as tag, index (tag)}
					<li
						class="text-[20px] grid grid-cols-[1fr_32px] place-items-center gap-2 rounded-[0.27rem] bg-[var(--bg-color)] p-1
						
					  text-center w-[max-content] font-semibold leading-none text-[var(--text-color)] border-[1px] border-cyan-200 pl-2"
					>
						{tag}
						<span
							class="relative w-6 cursor-pointer h-full bg-[var(--btn-bg-color)] text-[var(--text-color)]
	 						rounded-tr-[0.27rem] rounded-br-[0.27rem] m-[0] text-[32px] font-thin leading-none
						  text-amber-50 selection:border-cyan-100 pb-1"
							tabindex="0"
							role="button"
							on:click={() => remove(tag)}
							on:keydown={(e) =>
								e.key === 'Enter' && remove(tag)}
							>&times;</span
						>
					</li>
				{/each}
			</ul>

			<div
				class="grid justify-center items-center w-full h-[60px] bg-pink-200/20 border-[1px] rounded-xl"
			>
				<form action="" class="flex gap-1 ">
					<input
						class="border-2  border-amber-500 align-middle rounded-[0.27rem] text-white bg-slate-900 pl-2"
						id="add-tag-input"
						type="text"
						placeholder="Add a tag..."
						on:keydown={addItem}
					/>

					<button
						class="border-0 border-[var(--btn-bg-color)] align-middle rounded-[0.27rem] text-white bg-slate-900"
						type="button"
						id="add-tag-submit"
						on:click={addItem}>Add</button
					>
				</form>
			</div>
		</label>
	</section>
</body>

<style>
	button {
		border: 0;
		line-height: 2.5;
		padding: 0 18px;
		font-size: 1rem;
		text-align: center;
		color: #fff;
		text-shadow: 1px 1px 1px #000;
		border-radius: 10px;
	
		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);
		box-shadow:
			inset 2px 2px 3px rgba(255, 255, 255, 0.6),
			inset -2px -2px 3px rgba(0, 0, 0, 0.6);
	}

	button:hover {
		background-color: rgba(255, 0, 0, 1);
	}

	button:active {
		box-shadow:
			inset -2px -2px 3px rgba(255, 255, 255, 0.6),
			inset 2px 2px 3px rgba(0, 0, 0, 0.6);
	}

	:root {
		--text-color: hsla(300, 29%, 97%, 0.84);
		--bg-color: hsla(270, 85%, 28%, 0.692);
		--btn-bg-color: #074e5a;
		--border-radius: 0.47rem;
	}

	.tag-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
