<script lang="ts">
  export let points: string[];
</script>

<ul class="mt-4 space-y-3 text-sm leading-6 text-gray-600 w-full">
  {#each points as point}
    <li class="flex gap-x-3 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
        />
      </svg>
      <p class="w-full">{point}</p>
    </li>
  {/each}
</ul>
