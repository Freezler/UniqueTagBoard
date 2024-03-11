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
	<h1
		class="text-2xl font-semibold uppercase text-amber-50"
	>
		Tags demo svelte tailwind
	</h1>
	<p class="text-xs text-amber-50 pb-2">
		project made with sveltekit, tailwind and autoanimate.
	</p>
</header>
<section class="flex flex-col h-full m-auto  mt-32">
	<label for="add-tag-input" class="tag-input">
		<ul
			use:autoAnimate={{
				duration: 600,
				easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
				selector: 'li'
			}}
			class="flex flex-row flex-wrap items-center justify-center  w-[auto] bg-slate-900 gap-8  py-12 h-[100%] rounded-md"
		>
			{#each tags as tag, index (tag)}
				<li
					class="grid grid-cols-[1fr_32px] place-items-center gap-2 rounded-[0.27rem] bg-[var(--bg-color)] 
					  text-center w-[max-content] text-[0.75em] font-semibold leading-none text-[var(--text-color)] border-[1px] border-cyan-200 pl-2"
				>
					{tag}
					<span
						class="relative w-6 cursor-pointer h-full bg-[var(--btn-bg-color)] text-[var(--text-color)] rounded-tr-[0.27rem] rounded-br-[0.27rem] m-[0rem] text-[32px] font-thin leading-none text-amber-50 selection:border-cyan-100 pb-1"
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
			<label for="add-tag-input" class="pl-2 text-xl  text-red-500"
				>Add add Tag.</label
			>
			<input
				class="border-2 border-amber-500 pl-2 pb-1 pt-1 rounded-md"
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
		--bg-color: hsla(292, 65%, 26%, 0.525);
		--btn-bg-color: #074e5a;
	}

	.tag-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
