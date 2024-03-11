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
		e.preventDefault();
	}
</script>
<body class="bg-slate-500">
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
<section class="smooth-scroll  bg-slate-900 flex flex-col h-full m-auto mt-32">
	<label for="add-tag-input" class="tag-input">
		<ul
			use:autoAnimate={{
				duration: 600,
				easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
				selector: 'li'
			}}
			class="flex flex-row flex-wrap items-center justify-center w-[80vw] bg-slate-900 gap-8 p-6 h-[60vh] rounded-md overflow-auto"
		>
			{#each tags as tag, index (tag)}
				<li
					class="grid grid-cols-[1fr_32px] place-items-center gap-2 rounded-[0.27rem] bg-[var(--bg-color)]
					  text-center w-[max-content] text-[0.45rem] font-semibold leading-none text-[var(--text-color)] border-[1px] border-cyan-200 pl-2"
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
			<label
				for="add-tag-input"
				class="pl-2 text-2xl text-pink-600"
				>Add add Tag.</label
			>
			<input
				class="border-2 border-amber-500 pl-2 pb-1 mb-2 pt-1 rounded-md"
				id="add-tag-input"
				type="text"
				placeholder="Add a tag..."
				on:keydown={addItem}
			/>
		</div>
	</label>
</section>
</body>

<style>
	:root {
		--text-color: hsla(300, 29%, 97%, 0.84);
		--bg-color: hsla(270, 85%, 28%, 0.692);
		--btn-bg-color: #074e5a;
	}

	.tag-input {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
