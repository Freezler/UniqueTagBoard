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
<h1 >Tags demo svelte tailwind</h1>
</header>
<p>
	project made with sveltekit, tailwind and autoanimate.
</p>
<section>
	<label for="add-tag-input" class="tag-input">
		<ul
			use:autoAnimate={{
				duration: 200,
				delay: 0,
				easing: 'ease-in-out'
			}}
			class="flex flex-row flex-wrap gap-4 justify-center"
		>
			<!-- 👀 thats it folks! -->
			{#each tags as tag (tag)}
				<li
					class="max-h-[36px] overflow-hiddeninline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 border-2"
				>
					{tag}<button
						class=" inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 pl-[0.65em] pr-0 pb-[0.5em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
						on:click={() => remove(tag)}>&times;</button
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
				type="text"
				placeholder="Add a tag..."
				on:keydown={addItem}
			/>
		</div>
	</label>
</section>
