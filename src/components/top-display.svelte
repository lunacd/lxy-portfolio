<script lang="ts">
  import type ProjectDescription from '../utils/project-description';

  export let image: string, description: ProjectDescription, titleColor: string;
</script>

<div class="mb-spacing-3lg flex h-screen min-h-[30rem] flex-col xl:min-h-[34rem]">
  <div class="relative min-h-0 w-full flex-shrink flex-grow">
    <img src={image} alt={description.name} class="h-full w-full object-cover" loading="lazy" />
    <div class={`absolute left-spacing-lg top-24 text-3xl ${titleColor}`}>{description.name}</div>
  </div>
  <div class="flex flex-col items-center">
    <div class="single mx-spacing-lg flex flex-row space-x-spacing py-8">
      <div class="half space-y-2">
        <div class="section">
          <span class="heading">Duration:</span>
          {description.duration}
        </div>
        <div class="section">
          <span class="heading">Category:</span>
          {description.category}
        </div>
        <div class="section">
          <span class="heading">Project Focus:</span>
          {description.focus}
        </div>
      </div>
      <div class="half space-y-2">
        <div class="section">
          <span class="heading">Project Brief:</span>
          {description.brief}
        </div>
        {#if description.comment !== undefined}
          <div class="text-xs">
            * {description.comment}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .section {
    @apply font-extralight;
    & span {
      @apply font-semibold;
    }
  }
</style>
