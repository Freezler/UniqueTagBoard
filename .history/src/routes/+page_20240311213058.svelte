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

	// make a mouse tag event handle function

	function mouse

	}

	function remove(target) {
		tags = tags.filter((tag) => target !== tag);
	}
</script>

<body class="bg-slate-950 h-[100vh]">
	<section
		class="smooth-scroll bg-slate-900 flex flex-col h-full m-0 mt-0"
	>
		<label for="add-tag-input" class="tag-input">
			<ul
				use:autoAnimate={{
					duration: 400,
					easing: 'ease-in-out'
				}}
				class="flex flex-row flex-wrap items-center justify-center w-[80vw] bg-slate-900 gap-4 mt-4 rounded-[0.27rem] overflow-auto"
			>
				{#each tags as tag, index (tag)}
					<li
						class="grid grid-cols-[1fr_32px] place-items-center gap-2 rounded-[0.27rem] bg-[var(--bg-color)]
						
					  text-center w-[max-content] text-[0.45rem] font-semibold leading-none text-[var(--text-color)] border-[1px] border-cyan-200 pl-2"
					>
						{tag}
						<span
							class="relative w-6 cursor-pointer h-full bg-[var(--btn-bg-color)] text-[var(--text-color)]
	 						rounded-tr-[0.27rem] rounded-br-[0.27rem] m-[0rem] text-[32px] font-thin leading-none
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
				class="grid place-items-center pb-0 bg-slate-900"
			>
				<h1
					class="text-2xl font-semibold pt-0 uppercase text-amber-50"
				>
					Tag Generator
				</h1>
				<p
					class="text-xs text-amber-50 pb-0 font-semibold w-[35ch] text-pretty text-center"
				>
					project made with sveltekit, tailwind and
					autoanimate.
				</p>
			</div>
			<div
				class="  grid place-items-center left-0 w-full h-[6rem] bg-slate-900"
			>
				<label
					for="add-tag-input"
					class="pl-2 text-xl text-fuchsia-300 font-semibold pb-1 mb-2 pt-1 rounded-[0.27rem] bg-slate-900"
					>Add a tag</label
				>
				<form action="">
					<input
						class="border-2 border-amber-500 pl-2 pb-1 mb-2 pt-1 rounded-[0.27rem] text-white bg-slate-900"
						id="add-tag-input"
						type="text"
						placeholder="Add a tag..."
						on:keydown={addItem}
					/>

					<button
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
		background-color: rgba(220, 0, 0, 1);
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
