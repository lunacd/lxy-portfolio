<script lang="ts">
  import Spacing from './spacing.svelte';

  export let bgColor: string;
</script>

<div class={`flex-grow ${bgColor}`}>
  <div class="h-screen min-h-[30rem] overflow-x-hidden overflow-y-scroll xl:min-h-[34rem]">
    <div class="flex flex-col items-center">
      <slot />
      <Spacing />
    </div>
  </div>
</div>
