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
<label for="add-tag-input" class="tag-input">
	<ul use:autoAnimate={{ duration: 300, easing: 'ease-in-out' }} class="flex flex-row flex-wrap gap-4 justify-evenly ">
		<!-- 👀 thats it folks! -->
		{#each tags as tag (tag)}
			<li class="tag w-full flex flex-row  align-middle items-center py-0 px-8 text-sm font-medium bg-purple-500 text-gray-100 rounded-2xl cursor-pointer sm:w-min hover:bg-purple-700 hover:text-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50 mb-4 sm:mb-0">{tag}<button class="pl-1 b  max-h-6" on:click={() => remove(tag)}>&times;</button></li>
		{/each}
	</ul>
    <div class="flex flex-col items-start justify-start ">
        <label for="add-tag-input" class="pl-2">Add a Tag.</label>
        <input
            class="border-2 border-black pl-2"
            id="add-tag-input"
            aria-label="tablist"
            type="text"
            placeholder="Add a tag..."
            on:keydown={addItem}
        />
    </div>
    </section>

