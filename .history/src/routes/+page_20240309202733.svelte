<script>
	import autoAnimate, { getTransitionSizes } from '@formkit/auto-animate'

autoAnimate(parentElement, (el, action, oldCoords, newCoords) => {
  let keyframes
  // supply a different set of keyframes for each action
  if (action === 'add') {
    keyframes = [
      { transform: 'scale(0)', opacity: 0 },
      { transform: 'scale(1.15)', opacity: 1, offset: 0.75 },
      { transform: 'scale(1)', opacity: 1 }
    ]
  }
  // keyframes can have as many "steps" as you prefer
  // and you can use the 'offset' key to tune the timing
  if (action === 'remove') {
    keyframes = [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(1.15)', opacity: 1, offset: 0.33 },
      { transform: 'scale(0.75)', opacity: 0.1, offset: 0.5 },
      { transform: 'scale(0.5)', opacity: 0 }
    ]
  }
  if (action === 'remain') {
    // for items that remain, calculate the delta
    // from their old position to their new position
    const deltaX = oldCoords.left - newCoords.left
    const deltaY = oldCoords.top - newCoords.top
    // use the getTransitionSizes() helper function to
    // get the old and new widths of the elements
    const [widthFrom, widthTo, heightFrom, heightTo] = getTransitionSizes(el, oldCoords, newCoords)
    // set up our steps with our positioning keyframes
    const start = { transform: `translate(${deltaX}px, ${deltaY}px)` }
    const mid = { transform: `translate(${deltaX * -0.15}px, ${deltaY * -0.15}px)`, offset: 0.75 }
    const end = { transform: `translate(0, 0)` }
    // if the dimensions changed, animate them too.
    if (widthFrom !== widthTo) {
      start.width = `${widthFrom}px`
      mid.width = `${widthFrom >= widthTo ? widthTo / 1.05 : widthTo * 1.05}px`
      end.width = `${widthTo}px`
    }
    if (heightFrom !== heightTo) {
      start.height = `${heightFrom}px`
      mid.height = `${heightFrom >= heightTo ? heightTo / 1.05 : heightTo * 1.05}px`
      end.height = `${heightTo}px`
    }
    keyframes = [start, mid, end]
  }
  // return our KeyframeEffect() and pass
  // it the chosen keyframes.
  return new KeyframeEffect(el, keyframes, { duration: 600, easing: 'ease-out' })
})

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
						class=" overflow-hidden inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.4em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 dark:bg-slate-900 dark:text-primary-500"
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
