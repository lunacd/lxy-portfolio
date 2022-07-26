<script lang="ts">
  import type ProjectDescription from '../utils/project-description';

  export let image: string, description: ProjectDescription, titleColor: string;
</script>

<div class="mb-spacing-3lg flex h-screen min-h-[30rem] flex-col xl:min-h-[34rem]">
  <div class="relative min-h-0 w-full flex-shrink flex-grow">
    <img src={image} alt={description.name} class="h-full w-full object-cover" loading="lazy" />
    <div class="absolute left-0 top-0 flex h-full w-full justify-center">
      <div class={`single mt-12 xl:mt-24 text-3xl ${titleColor}`}>{description.name}</div>
    </div>
  </div>
  <div class="flex flex-col items-center">
    <div class="single mx-spacing-lg flex flex-row space-x-spacing py-8">
      <div class="half flex flex-col justify-around space-y-1">
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
      <div class="half flex flex-col justify-around space-y-1">
        <div class="section">
          <span class="heading">Project Brief:</span>
          {description.brief}
        </div>
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
