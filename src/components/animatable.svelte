<script lang="ts">
  import { Animation } from '../utils/animation';
  import type { Image } from '../utils/image';
  import { onMount } from 'svelte';

  export let source: Animation | Image,
    alt: string,
    adaptiveHeight = false,
    totalWidth = 0,
    rowCount = 0,
    rowFactor = 0;

  let currentImage = '';
  let alternateImage = '';
  let mainVisible = true;
  let currentIndex = 0;

  onMount(() => {
    if (source instanceof Animation) {
      currentImage = source.frames[0];
      setInterval(() => {
        let animation = source as Animation;
        currentIndex = (currentIndex + 1) % (animation.frames.length * 2);
        if (currentIndex % 2 === 0) {
          currentImage = animation.frames[currentIndex % animation.frames.length];
          mainVisible = true;
        } else {
          alternateImage = animation.frames[currentIndex % animation.frames.length];
          mainVisible = false;
        }
      }, 1500);
    } else {
      currentImage = source.src;
    }
  });
</script>

<div class="relative">
  <img
    src={currentImage}
    {alt}
    style={adaptiveHeight
      ? `height: calc((${totalWidth}px - ${(rowCount - 1) * 2}rem)/${rowFactor}`
      : ''}
    class:max-w-full={adaptiveHeight}
    class="transition-opacity duration-700 ease-linear"
    class:opacity-0={!mainVisible}
    loading="lazy"
  />
  {#if alternateImage !== undefined}
    <img
      src={alternateImage}
      {alt}
      class="absolute left-0 top-0 h-full w-full transition-opacity duration-700 ease-linear"
      class:opacity-0={mainVisible}
      loading="lazy"
    />
  {/if}
</div>
