<script lang="ts">
  export let main: string;
  export let secondary: string;
  export let imageSource: string;
  export let name: string;
</script>
<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
  <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
    <blockquote class="text-gray-900 text-lg">
      <p>
        {main}
      </p>
    </blockquote>
    <p class="mt-2 text-sm text-gray-600">
      {secondary}
    </p>
    <figcaption class="mt-6 flex items-center gap-x-4">
      <img
        class="h-10 w-10 rounded-full bg-gray-50"
        src={imageSource}
        alt=""
      />
      <div>
        <div class="font-semibold text-gray-900">
          {name}
        </div>
      </div>
    </figcaption>
  </figure>
</div>
