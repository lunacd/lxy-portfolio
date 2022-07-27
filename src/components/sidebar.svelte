<script lang="ts">
  import { Route } from '../utils/route';
  import Logo from '../images/logo.svg';
  import { crossfade } from '../utils/crossfade';

  const [send, receive] = crossfade;

  export let currentRoute: string;

  let open = true;
  const routes = [
    new Route('overlap', 'Overlap'),
    new Route('lyu', 'Lyu'),
    new Route('soul', 'Soul'),
    new Route('sunrise', 'Sunrise Speaker'),
    new Route('mode', 'Mode Bag'),
    new Route('more', 'More')
  ];
</script>

<div
  class="relative h-screen min-h-[30rem] flex-shrink-0 bg-white shadow-lg transition-[width] duration-200 ease-in-out xl:min-h-[34rem]"
  class:w-64={open}
  class:xl:w-84={open}
  class:w-0={!open}
>
  <div class="absolute top-0 right-14 flex h-full w-36 flex-col justify-between py-16 xl:right-24">
    <a href="/">
      <img src={Logo} alt="Shirley Lyu Logo" class="w-full" loading="lazy" />
    </a>
    <div class="flex flex-col space-y-1">
      <a href="/about" class="subtitle">About</a>
      <a href="/portfolio" class="subtitle">Portfolio</a>

      {#each routes as route}
        <div class="flex flex-row items-center">
          <!-- <div class="absolute transition-opacity" class:opacity-0={route.uri !== currentRoute}>
            -
          </div> -->
          <a
            href={`/${route.uri}`}
            class="paragraph transition-transform"
            class:translate-x-3={route.uri === currentRoute}
            out:send={{ key: route.uri }}
            in:receive={{ key: route.uri }}
          >
            {route.name}
          </a>
        </div>
      {/each}

      <a href="/mini" class="subtitle">Mini Works</a>
      <a href="/resume" class="subtitle pb-4">Resume</a>
    </div>
    <div class="flex flex-row justify-between">
      <a href="https://www.instagram.com/lyu.shirley/" target="_blank">
        <i class="fa-brands fa-instagram" />
      </a>
      <a href="mailto:shirley.lyu.xiaoya@gmail.com">
        <i class="fa-regular fa-envelope" />
      </a>
      <a href="https://www.linkedin.com/in/xiaoya-lyu-11b68419b/" target="_blank">
        <i class="fa-brands fa-linkedin-in" />
      </a>
    </div>
  </div>
  <div
    class="absolute top-20 -right-16 z-10 h-16 w-16 overflow-hidden xl:-right-20 xl:h-20 xl:w-20"
  >
    <div
      class="absolute top-0 -left-8 flex h-16 w-16 cursor-pointer items-center rounded-full bg-white shadow-lg xl:-left-10 xl:h-20 xl:w-20"
      on:click={() => {
        open = !open;
      }}
    >
      <i
        class="fa-solid fa-angle-left angle-icon relative left-9 transition-transform duration-200 ease-in-out xl:left-12"
        class:rotate={!open}
      />
    </div>
  </div>
</div>

<style lang="postcss">
  .rotate {
    transform: rotateY(180deg);
  }

  .angle-icon {
    font-size: 1.25em;
    line-height: 0.05em;
    vertical-align: -0.075em;
  }

  @media (min-width: 1280px) {
    .angle-icon {
      font-size: 1.5em;
      line-height: 0.04167em;
      vertical-align: -0.125em;
    }
  }
</style>
