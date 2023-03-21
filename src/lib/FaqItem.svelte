<script lang="ts">
  export let question: string;
  export let answer: string;
  let open = false;
</script>

<div class="pt-6">
  <dt>
    <!-- Expand/collapse question button -->
    <button
      type="button"
      class="flex w-full items-start justify-between text-left text-gray-900"
      aria-controls="faq-0"
      aria-expanded="false"
      on:click={() => (open = !open)}
    >
      <span class="text-base font-semibold leading-7">{question}</span>
      <span class="ml-6 flex h-7 items-center">
        <!--
                  Icon when question is collapsed.

                  Item expanded: "hidden", Item collapsed: ""
                -->
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class:hidden={open}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <!--
                  Icon when question is expanded.

                  Item expanded: "", Item collapsed: "hidden"
                -->
        <svg
          class="hidden h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class:hidden={!open}
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
        </svg>
      </span>
    </button>
  </dt>
  <dd class="mt-2 pr-12" class:hidden={!open}>
    <p class="text-base leading-7 text-gray-600">
      {answer}
    </p>
  </dd>
</div>
