<script lang="ts">
  import '../app.css';
</script>

<div class="hidden lg:block">
  <slot />
</div>
<div class="m-12 block font-semibold lg:hidden">
  Your screen is too small. Use a larger device or enlarge your browser window.
</div>

<style global lang="postcss">
  :root {
    --spacing: 1.5rem;
    --spacing-lg: 2rem;
    --sidebar: 16rem;
  }

  @media (min-width: 1280px) {
    :root {
      --spacing: 4rem;
      --spacing-lg: 6rem;
      --sidebar: 21rem;
      @apply text-lg;
    }
  }

  .title {
    @apply text-xl font-semibold xl:text-2xl;
  }

  .subtitle {
    @apply text-base font-semibold xl:text-lg;
  }

  .paragraph {
    @apply text-sm font-extralight xl:text-base;
  }

  .button {
    @apply rounded-full bg-gray-200 shadow;
  }

  .single {
    width: calc(100vw - var(--sidebar) - 2 * var(--spacing-lg));
  }

  /* 1 | 1 */
  .half {
    width: calc((100vw - var(--sidebar) - 2 * var(--spacing-lg) - var(--spacing)) / 2);
  }

  /* 2 | 1 */
  .two-thirds {
    width: calc((100vw - var(--sidebar) - 2 * var(--spacing-lg) - var(--spacing)) * 2 / 3);
  }

  /* 1 | 2 */
  .one-third {
    width: calc((100vw - 21rem - 2 * var(--spacing-lg) - var(--spacing)) / 3);
  }
</style>
