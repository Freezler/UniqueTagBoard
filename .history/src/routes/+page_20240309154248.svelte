<script>
  import autoAnimate from '@formkit/auto-animate';
  let tags = ['Rock', 'Punk'];
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
