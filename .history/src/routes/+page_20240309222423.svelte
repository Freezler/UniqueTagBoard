<script>
	import autoAnimate from '@formkit/auto-animate';
	let tags = [
		'Svelte',
		'SvelteKit',
		'TailwindCSS',
		'AutoAnimate',
		'Prettier',
		'ESLint',
		'Vite'
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

<header>
	<h1 class="text-3xl font-bold underline">
		Tags demo svelte tailwind
	</h1>
</header>
<p>
	project made with sveltekit, tailwind and autoanimate.
</p>
<section class="flex flex-col h-full  m-auto border-2">
	<label for="add-tag-input" class="tag-input">
		<ul
			use:autoAnimate={{
				duration: 800,
				delay: 0,
				easing: 'ease-in-out'
			}}
			class="flex flex-row flex-wrap gap-4 justify-center align-text-bottom"
		>
			{#each tags as tag, index (tag)}
				<li
					class="max-h-[36px] overflow-hidden inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.45em]
					pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-[var'('--text-color)] border-2"
				>
					{tag}
					<span
						class="cursor-pointer bg-sky-300 text-[var(--text-color)]"
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
		<div class="flex flex-col align-bottom w-1/2">
			<label for="add-tag-input" class="pl-2"
				>Add a Tag.</label
			>
			<input
				class="border-2 border-black pl-2"
				id="add-tag-input"
				type="text"
				placeholder="Add a tag..."
				on:keydown={addItem}
			/>
		</div>
	</label>
</section>
