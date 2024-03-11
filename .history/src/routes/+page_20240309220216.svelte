<script>
	import autoAnimate from '@formkit/auto-animate';

	let tags = [
		// ... your tags
	];

	function addItem(e) {
		if (e.key === 'Enter') { // Changed from `e.which` to `e.key` for modern usage
			tags.push(e.target.value);
			e.target.value = '';
		}
	}

	function remove(tag) {
		tags = tags.filter((t) => t !== tag);
	}
</script>

<header>
	<!-- ... -->
</header>
<p>
	<!-- ... -->let tags = [
		'Svelte',
		'SvelteKit',
		'TailwindCSS',
		'AutoAnimate',
		'Prettier',
		'ESLint',
		'Vite'
	];
</p>
<section class="grid grid-auto-cols">
	<label for="add-tag-input" class="tag-input">
		<ul
			use:autoAnimate={{
				duration: 200,
				delay: 0,
				easing: 'ease-in-out'
			}}
			class="flex flex-row flex-wrap gap-4 justify-center"
		>
			{#each tags as tag, index (tag)}
				<li
					class="max-h-[36px] overflow-hidden inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 border-2"
				>
					{tag}
					<span
						class="cursor-pointer"
						tabindex="0"
						role="button"
						on:click={() => remove(tag)}
						on:keydown={(e) => e.key === 'Enter' && remove(tag)}
					>&times;</span>
				</li>
			{/each}
		</ul>
		<div class="flex flex-col align-bottom w-1/2">
			<label for="add-tag-input" class="pl-2">Add a Tag.</label>
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