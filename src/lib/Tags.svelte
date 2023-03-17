<script lang="ts">
  export let tags: string[];
</script>
<div class="flex flex-col justify-around py-4 flex-wrap">
  {#each tags as tag}
    <span
      class="inline-flex items-center rounded-md bg-indigo-100 px-2.5 text-sm font-medium text-indigo-800 mt-2 truncate"
      >{tag}</span
    >
  {/each}
</div>
