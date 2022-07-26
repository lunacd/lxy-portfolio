<script lang="ts">
  import type GalleryItem from '../utils/gallery-item';

  export let items: GalleryItem[];
</script>

<div class="single paragraph mx-spacing-lg mb-spacing-3lg grid grid-cols-3 gap-y-spacing gap-x-8">
  {#each items as item}
    <div class="flex flex-col items-center">
      <img src={item.image} alt={item.title} loading="lazy" />
      <div class="subtitle mt-2">{item.title}</div>
    </div>
  {/each}
</div>
