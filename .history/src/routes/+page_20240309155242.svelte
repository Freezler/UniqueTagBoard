<script>
  import autoAnimate from '@formkit/auto-animate';
  let tags = ['Svelte', 'SvelteKit', 'TailwindCSS', 'AutoAnimate', 'Prettier', 'ESLint', 'Vite'];
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
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<label for="add-tag-input" class="tag-input">
  <ul class="flex flex-row gap-4"> <!-- 👀 thats it folks! -->
    {#each tags as tag (tag)}
      <li class="tag">
        <span>{tag}</span>
        <span role="button" tabindex="" on:keydown={(e) => e.key === 'Enter'}  on:click={() => remove(tag)}>x</span>
      </li>
    {/each}
    <li>
      <input
        id="add-tag-input"
        type="text"
        placeholder="Add a tag..."
        on:keydown={addItem}
      />
    </li>
  </ul>
</label>