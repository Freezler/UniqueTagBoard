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

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to
	read the documentation
</p>
<section>
	<label for="add-tag-input" class="tag-input ">
		<ul
			use:autoAnimate={{
				duration: 200,
				delay: 0,
				// easing: 'ease-in-out',

				animation: 'slide-down',

			}}
			class="flex flex-row flex-wrap gap-4 justify-center"
		>
			<!-- 👀 thats it folks! -->
			{#each tags as tag (tag)}
				<li
					class="h-full  overflow-hiddeninline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 dark:bg-slate-900 dark:text-white"
				>
					{tag}<button
						class=" inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 pl-[0.65em]  pr-pb-[0.4em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 dark:bg-slate-900 dark:text-primary-500"
						on:click={() => remove(tag)}>&times;</button
					>
				</li>
			{/each}
		</ul>
		<div class="flex flex-col w-1/2">
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
