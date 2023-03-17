<script lang="ts">
  let open = false

  type Category = {
    title: string,
    size: number,
    duration: string,
  };

  export let main: Category;
  export let subcategories: Category[];
</script>
<dl class="my-2">
  <button class="w-full" on:click={() => (open = !open)}>
    {#if !open}
      <dt
        class="text-sm text-left font-medium text-gray-600 dark:text-gray-600"
      >
        {main.title}
      </dt>
      <dd class="flex items-center mb-3">
        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-white mr-2">
          <div
            class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
            style="width: {main.size}%"
          />
        </div>
        <span
          class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
          >{main.duration}</span
        >
      </dd>
    {:else}
      {#each subcategories as category}
      <dt
        class="text-sm text-left font-medium text-gray-600 dark:text-gray-600"
      >
        {category.title}
      </dt>
      <dd class="flex items-center mb-3">
        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-white mr-2">
          <div
            class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
            style="width: {category.size}%"
          />
        </div>
        <span
          class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
          >{category.duration}</span
        >
      </dd>
      {/each}
    {/if}
  </button>
</dl>
