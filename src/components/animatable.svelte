<script lang="ts">
  import { Animation } from '../utils/animation';
  import type { Image } from '../utils/image';

  export let source: Animation | Image,
    alt: string,
    frame = 0,
    adaptiveHeight = false,
    totalWidth = 0,
    rowCount = 0,
    rowFactor = 0;

  let images: string[];
  if (source instanceof Animation) {
    images = source.frames;
  } else {
    images = [source.src];
  }
</script>

<div class="relative">
  <img
    src={images[0]}
    {alt}
    style={adaptiveHeight
      ? `height: calc((${totalWidth}px - ${(rowCount - 1) * 2}rem)/${rowFactor}`
      : ''}
    class:max-w-full={adaptiveHeight}
    class="transition-opacity duration-700 ease-linear"
    class:opacity-0={frame % images.length !== 0}
    loading="lazy"
  />
  {#each images as image, index}
    {#if index !== 0}
      <img
        src={image}
        {alt}
        style={adaptiveHeight
          ? `height: calc((${totalWidth}px - ${(rowCount - 1) * 2}rem)/${rowFactor}`
          : ''}
        class:max-w-full={adaptiveHeight}
        class="absolute left-0 top-0 w-full transition-opacity duration-700 ease-linear"
        class:opacity-0={frame % images.length !== index}
        loading="lazy"
      />
    {/if}
  {/each}
</div>
