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
<section
	class="flex flex-col h-full m-auto border-2 h-full"
>
	<label for="add-tag-input" class="tag-input">
		<ul
			use:autoAnimate={{
				duration: 700
			}}
			class="flex flex-row flex-wrap gap-4 justify-center "
		>
			{#each tags as tag, index (tag)}
				<li
					class="grid grid-cols-[1fr_20px] overflow-hidden whitespace-nowrap rounded-[0.27rem] bg-primary-100
					pb-[0.45em] m-[40px] py-[0.35em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-[var(--text-color)] border-2"
				>
					{tag}
					<span
						class="cursor-pointer h-full bg-[var(--bg-color)] text-[var(--text-color)] overflow-clip rounded-[0.27rem] px-[0.24rem] py-[auto] text-right text-[0.75em] font-bold leading-none text-white"
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
		--text-color: hsla(0, 0%, 100%, 0.904);
		--bg-color: hsl(293, 93%, 48%);
		--btn-bg-color: #074e5a;
	}

	.tag-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
