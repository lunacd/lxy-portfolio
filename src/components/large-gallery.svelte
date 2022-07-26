<script lang="ts">
  import { onMount } from 'svelte';
  import { GalleryRow, GalleryRowConfig } from '../utils/gallery-row';
  import Animatable from './animatable.svelte';

  export let rows: GalleryRow[],
    description: string,
    botSpacing = true;

  let width: number;
  let rowFactors = rows.map((row) =>
    row.images.map((curr) => curr.width / curr.height).reduce((prev, curr) => prev + curr)
  );
  let index = 0;

  onMount(() => {
    setInterval(() => {
      index += 1;
      console.log(index);
    }, 1500);
  });
</script>

<div
  class="space-y-spacing"
  bind:clientWidth={width}
  class:mb-spacing-3lg={botSpacing}
  class:mb-spacing={!botSpacing}
>
  {#each rows as row, i}
    {#if row.config === GalleryRowConfig.FixedHeight}
      <div class="flex flex-row space-x-8">
        {#each row.images as image}
          {#if row.images.length === 1}
            <Animatable source={image} alt={`${description} gallery image`} frame={index} />
          {:else}
            <Animatable
              source={image}
              alt={`${description} gallery image`}
              frame={index}
              adaptiveHeight={true}
              totalWidth={width}
              rowCount={row.images.length}
              rowFactor={rowFactors[i]}
            />
          {/if}
        {/each}
      </div>
    {:else}
      <div
        class="grid auto-cols-fr grid-flow-col items-end gap-8"
        class:items-start={row.config === GalleryRowConfig.EqualWidthStart}
        class:items-end={row.config === GalleryRowConfig.EqualWidthEnd}
      >
        {#each row.images as image}
          <Animatable source={image} alt={`${description} gallery image`} frame={index} />
        {/each}
      </div>
    {/if}
  {/each}
</div>
