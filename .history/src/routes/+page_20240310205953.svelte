<script>
	import autoAnimate from '@formkit/auto-animate';
	let tags = [
		'Svelte',
		'SvelteKit',
		'TailwindCSS',
		'AutoAnimate',
		'Prettier',
		'ESLint',
		'Vite',
		'VSCode',
		'GitHub',
		'NPM',
		'Vercel',
		'Figma',
		
		'autoAnimate'
	];
	function addItem(e) {
		if (e.which === 13) {
			tags.push(e.target.value);
			tags = tags;
			e.target.value = '';
		}
	}
	function remove(target) {
		tags = tags.filter((tag) => target !== tag);
	}
</script>

<header class="grid place-items-center h-20 bg-slate-900">
	<h1 class="text-2xl font-semibold uppercase text-amber-50">
		Tags demo svelte tailwind
	</h1>
	<p class="text-xs text-amber-50 pb-2">
		project made with sveltekit, tailwind and autoanimate.
	</p>
</header>
<section class="flex flex-col h-full m-auto border-2">
	<label for="add-tag-input" class="tag-input">
		<ul
			use:autoAnimate={{
				duration: 400
			}}
			class="flex flex-row flex-wrap items-center justify-center w-[80vw] bg-slate-900 p-4 h-[80vh] overflow-x-auto"
		>
			{#each tags as tag, index (tag)}
				<li
					class="grid max-h-[1.5rem] grid-cols-[1fr_20px] overflow-hidden whitespace-nowrap rounded-[0.27rem] bg-[var(--bg-color)]
					pb-[0.45em] m-[24px] py-[0.35em] place-content-evenly pt-[0.35em] pl-2 pr-2 text-center w-28 text-[0.75em] font-bold leading-none text-[var(--text-color)] border-[1px] border-cyan-100"
				>
					{tag}
					<span
						class=" cursor-pointer h-full bg-[var(--btn-bg-color)] text-[var(--text-color)] rounded-[0.27rem] mb-[0.24em] text-[1rem] font-semibold leading-none text-amber-50 border-[1px] border-cyan-100"
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
			class=" fixed top-24 grid place-items-center left-0 w-full h-[6rem] bg-slate-900"
		>
			<label for="add-tag-input" class="pl-2 text-red-500 "
				>Add add Tag.</label
			>
			<input
				class="border-2 border-amber-500 pl-2"
				id="add-tag-input"
				type="text"
				placeholder="Add a tag..."
				on:keydown={addItem}
			/>
		</div>
	</label>
</section>

<style>
	:root {
		--text-color: hsla(300, 29%, 97%, 0.84);
		--bg-color: hsl(293, 96%, 29%);
		--btn-bg-color: #074e5a;
	}

	.tag-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
