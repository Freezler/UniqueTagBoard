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

<header class="grid place-items-center">
	<h1 class="text-2xl font-semibold uppercase">
		Tags demo svelte tailwind
	</h1>
	<p class="text-sm">
		project made with sveltekit, tailwind and autoanimate.
	</p>
</header>
<section
	class="flex flex-col h-full m-auto border-2 "
>
	<label for="add-tag-input" class="tag-input">
		<ul
			use:autoAnimate={{
				duration: 700
			}}
			class="flex flex-row flex-wrap gap-1 justify-center w-[80vw] bg-blue-400 p-4"
		>
			{#each tags as tag, index (tag)}
				<li
					class="grid max-h-[1.9rem] grid-cols-[1fr_20px] overflow-hidden whitespace-nowrap rounded-[0.27rem] bg-[var(--bg-color)]
					pb-[0.45em] m-[24px] py-[0.35em] pt-[0.35em] pl-2 pr-2 text-center align-baseline text-[0.75em] font-bold leading-none text-[var(--text-color)] border-2"
				>
					{tag}
					<span
						class=" cursor-pointer h-full bg-[var(--btn-bg-color)] text-[var(--text-color)] align-baseline rounded-[0.27rem] ml-[0.45em] py-[auto]  text-[0.75em] font-bold leading-none text-white"
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
			class=" fixed bottom-0 left-0 flex flex-col align-bottom w-1/2"
		>
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

<style>
	:root {
		--text-color: hsla(300, 29%, 97%, 0.84);
		--bg-color: hsl(293, 96%, 49%);
		--btn-bg-color: #074e5a;
	}

	.tag-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
