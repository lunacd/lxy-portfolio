<script lang="ts">
  import Spacing from './spacing.svelte';

  export let bgColor: string;
</script>

<div
  class={`flex-grow ${bgColor} h-screen min-h-[30rem] xl:min-h-[34rem] overflow-x-hidden overflow-y-scroll`}
>
  <div class="flex flex-col items-center">
    <slot />
    <Spacing />
  </div>
</div>
