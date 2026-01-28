<script setup lang="ts">
import type { NavigationItem } from "~/shared/types";
import {
  LandingVectorOne,
  LandingVectorTwo,
  LandingVectorThree,
  LandingVectorFour,
  LandingVectorFive,
  LandingVectorSix,
  LandingDoodleOne,
  LandingDoodleTwo,
  IconPlay,
  IconPause,
  MegaMenuOne,
  MegaMenuTwo,
} from ".";
import NavSlideWrapper from "./nav-slide-wrapper.vue";


const { $cn: cn } = useNuxtApp();

const navigations: Array<NavigationItem> = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Pages",
    path: "#",
  },
  {
    name: "Services",
    path: "#",
  },
  {
    name: "Blogs",
    path: "#",
  },
  {
    name: "Contact Us",
    path: "#",
  },
];

const isBeingHovered = ref<null | number>(null);
const navItemRefs = ref<(HTMLElement | null)[]>([]);
const popoverLeft = ref<null | number>(null);
const popoverHeight = ref<null | number>(null);
const currentNav = ref<NavigationItem["name"] | null>(navigations[0]!.name);
const currentHoverNav = ref<NavigationItem["name"] | null>(null);
const focusRef = ref<HTMLElement | null>(null);
const hoverFocusRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);
const isLoaded = ref(false)
const isPlaying = ref(false)

const handleCanPlay = () => {
  isLoaded.value = true
}
const togglePlay = () => {
  const video = videoRef.value;
  if (!video) return;

  if (video.paused) {
    video.play();
    isPlaying.value = true;
  } else {
    video.pause();
    isPlaying.value = false;
  }
};

const initVideoPlay = () => {
  const video = videoRef.value;
  if (!video) return;

  video.addEventListener("play", () => (isPlaying.value = true));
  video.addEventListener("pause", () => (isPlaying.value = false));
};

const updateActiveIndicator = () => {
  const container = containerRef.value;
  const focusElement = focusRef.value;
  // Find the element by data attribute instead of relying on a finicky ref callback
  const activeNav = container?.querySelector(
    `[data-tab="${currentNav.value}"]`,
  ) as HTMLElement;

  if (focusElement && activeNav && container) {
    const { offsetLeft, offsetWidth } = activeNav;
    const containerWidth = container.offsetWidth;

    const clipLeft = (offsetLeft / containerWidth) * 100;
    const clipRight = 100 - ((offsetLeft + offsetWidth) / containerWidth) * 100;

    focusElement.style.clipPath = `inset(0% ${clipRight}% 0% ${clipLeft}% round 1000px)`;
  }
};

const updateHoverIndicator = () => {
  const container = containerRef.value;
  const hoverFocusElement = hoverFocusRef.value;
  const hoverNav = container?.querySelector(
    `[data-tab="${currentHoverNav.value}"]`,
  ) as HTMLElement;

  if (hoverFocusElement && hoverNav && container) {
    const { offsetLeft, offsetWidth } = hoverNav;
    const containerWidth = container.offsetWidth;

    const clipLeft = (offsetLeft / containerWidth) * 100;
    const clipRight = 100 - ((offsetLeft + offsetWidth) / containerWidth) * 100;

    hoverFocusElement.style.opacity = "1";
    hoverFocusElement.style.clipPath = `inset(0% ${clipRight}% 0% ${clipLeft}% round 1000px)`;
  } else if (hoverFocusElement) {
    hoverFocusElement.style.clipPath = `inset(0% 0% 0% 0% round 1000px)`;
    // hoverFocusElement.style.opacity = `0`
  }
};

const handleMouseEnter = (e: MouseEvent, idx: number) => {
  const nav = navigations[idx];
  if (nav) {
    currentHoverNav.value = nav.name;
    isBeingHovered.value = idx;
  }
  const element = e.currentTarget as HTMLElement;
  const offsetLeft = element.offsetLeft;

  // console.log({ offsetLeft });
  popoverLeft.value = offsetLeft;

  const menuEl = navItemRefs.value?.[idx];

  if (menuEl) {
    popoverHeight.value = menuEl.offsetHeight;
  }
};
watch(currentNav, async () => {
  await nextTick();
  updateActiveIndicator();
});
watch(currentHoverNav, async () => {
  await nextTick();
  updateHoverIndicator();
});

onMounted(() => {
  initVideoPlay();
  updateActiveIndicator();
  updateHoverIndicator();
});
</script>

<template>
  <section class="w-full bg-background min-h-[80vh] z-100 relative">
    <header
      class="absolute w-full py-3.75 flex items-center justify-center z-1500! isolate"
      @mouseleave="() => {
        // isBeingHovered = null
      }"
    >
      <nav
        class="w-full lg:max-w-285 bg-header rounded-[40px] min-h-20 pt-2.5 px-3.75 pb-3.75 flex items-center justify-between z-500"
      >
        <div class="size-fit scale-[85%]">
          <img
            width="200"
            height="100"
            src="/images/staco-logo.svg"
            loading="eager"
            fetchpriority="high"
          
            alt="Staco"
          />
        </div>

        <div
          class="relative md:flex hidden items-center w-fit mx-auto h-full rounded-full p-0"
          ref="containerRef"
        >
          <ul class="relative flex items-center gap-3 z-20">
            <li v-for="(nav, idx) in navigations" :key="nav.name" class="">
              <button
                class="relative cursor-pointer rounded-full px-7 py-3 flex justify-center items-center gap-2"
                :data-tab="nav.name"
                @click="currentNav = nav.name"
                @mouseenter="handleMouseEnter($event, idx)"
                @mouseleave="currentHoverNav = null"
              >
                <span
                  :class="
                    $cn(
                      'capitalize text-center text-base font-medium font-sans leading-tight transition-all text-white',
                      currentNav === nav.name && 'text-neutral-900',
                    )
                  "
                >
                  {{ nav.name }}
                </span>
              </button>
            </li>
          </ul>

          <!-- overlay -->
          <div
            class="absolute inset-0 rounded-full bg-linear-to-b from-neutral-700 to-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)] transition-[clip-path] duration-300 ease-in-out"
          ></div>
          <div
            class="absolute inset-0.75 rounded-full bg-linear-to-b from-neutral-800 to-neutral-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.05)] transition-[clip-path] duration-300 ease-in-out"
          ></div>
          <div
            class="absolute h-[95%] bg-linear-to-b from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(255,255,255,0.3),inset_0_-8px_16px_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_1px_4px_rgba(0,0,0,0.1)] w-full transition-[clip-path] duration-300 ease-in-out [clip-path:inset(100%_100%_100%_100%)] z-10"
            ref="focusRef"
          ></div>

          <div
            class="absolute bg-linear-to-b from-white/10 to-white/5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-sm transition-[clip-path] duration-300 z-0 ease-in-out [clip-path:inset(0%_0%_0%_0%)] h-[80%] -mt-px w-[98%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "
            ref="hoverFocusRef"
          ></div>

          <!-- popover -->

          <main
            :class="cn('absolute top-10 z-10 pt-6 -ml-16 w-150  duration-300',

              isBeingHovered !== null ? 'transition-all' : 'opacity-0     pointer-events-none'
            )"
            :style="{
              left: popoverLeft ? `${popoverLeft}px` : `0px`,
              height: popoverHeight ? `${popoverHeight}px` : `0px`,
            }"
          >
            <NavSlideWrapper
              :index="0"
              :current-hover="currentHoverNav!"
              :hover-index="isBeingHovered"
              :name="navigations[0]!.name"
            >
              <MegaMenuOne
                :ref="
                  (el) => {
                    navItemRefs[0] = el as HTMLElement;
                  }
                "
              />
            </NavSlideWrapper>
            <NavSlideWrapper
              :index="1"
              :current-hover="currentHoverNav!"
              :hover-index="isBeingHovered"
              :name="navigations[1]!.name"
            >
              <MegaMenuTwo
                :ref="(el) => {
                    navItemRefs[1] = el as HTMLElement;
                  }
                "
              />
            </NavSlideWrapper>
          </main>
        </div>

        <div class="flex items-center gap-5">
          <UPopover mode="hover" :open-delay="100" :close-delay="300">
            <UButton
              label="EN"
              icon="i-lucide-globe"
              class="bg-transparent text-white rounded-3xl flex items-center py-3 px-3"
              color="neutral"
              variant="subtle"
            />

            <template #content>
              <ul class="flex flex-col gap-4 px-8 py-5 mt-2.5">
                <li>
                  <a href="#" class="list-item"
                    ><span class="select">EN</span><span>English (US)</span></a
                  >
                </li>
                <li>
                  <a href="#" class="list-item"
                    ><span class="select">EN</span><span>English (UK)</span></a
                  >
                </li>
                <li>
                  <a href="#" class="list-item"
                    ><span class="select">ES</span><span>Español</span></a
                  >
                </li>
                <li>
                  <a href="#" class="list-item"
                    ><span class="select">FR</span><span>Français</span></a
                  >
                </li>
                <li>
                  <a href="#" class="list-item"
                    ><span class="select">Tü</span><span>Türkçe</span></a
                  >
                </li>
                <li>
                  <a href="#" class="list-item"
                    ><span class="select">简体</span><span>简体中文</span></a
                  >
                </li>
                <li>
                  <a href="#" class="list-item"
                    ><span class="select">ITA</span><span>Italiano</span></a
                  >
                </li>
                <li>
                  <a href="#" class="list-item"
                    ><span class="select">العر</span><span>العربية</span></a
                  >
                </li>
              </ul>
            </template>
          </UPopover>
          <NuxtLink href="#" class="group mx-0.5">
            <span
              class="text-white group-hover:text-white/[0.698] transition ease-in-out duration-300"
              >Sign in</span
            >
          </NuxtLink>
          <PrimaryButton title="Start Free" />
        </div>
      </nav>
    </header>

    <main class="w-full relative overflow-hidden lg:max-w-285 px-3.75 mx-auto">
      <LandingVectorOne class="absolute top-1/5 right-[22%]" />
      <LandingVectorTwo class="absolute top-[35%] left-[43.5%]" />
      <LandingVectorThree class="absolute bottom-[18%] left-[45%]" />
      <LandingVectorFour class="absolute top-[56%] right-[40%]" />
      <LandingVectorFive class="absolute bottom-[13%] left-[25%]" />
      <LandingVectorSix class="absolute top-[18%] left-[25%]" />

      <section class="w-full relative pt-40 md:pt-61.75 pb-35 md:pb-53">
        <LandingDoodleOne class="absolute right-[22.25%] z-35 -top-3 md:block hidden" />
        <LandingDoodleTwo
          class="absolute right-[32%] z-25 top-[33%] -translate-x-1.75 md:block hidden"
        />

        <main class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 grid-rows-2 w-full gap-5">
          <div class="w-full">
            <h1 class="font-semibold text-white text-left mb-5.25 text-[60px]">
              Financial Security Made
              <FlipWords :words="['Easier', 'Accountable', 'Unbeatable']" />
            </h1>
            <p class="text-lg font-medium leading-9 mb-12 text-white">
              Staco is the dedicated platform for human management that <br />
              helps to grow your startup business quickly
            </p>

            <div class="flex items-center gap-5">
              <PrimaryButton title="Get Start For Free" :variant="'inverted'" />

              <button
                class="outline-0 focus:outline-0 border-0 flex items-center gap-2 group"
              >
                <span
                  class="text-base text-white transition-colors duration-300 group-hover:text-olive-active"
                  >Let&apos;s&nbsp;talk</span
                >
                <span
                  class="size-7.5 rounded-full flex items-center justify-center bg-header group-hover:bg-olive-active transition-all group-hover:-rotate-45 delay-75 duration-300"
                >
                  <UIcon
                    name="i-lucide-chevron-right"
                    class="size-4 text-white"
                  />
                </span>
              </button>
            </div>
          </div>

          <div
            class="w-full animate-[bounceInUp_0.7s_ease-out_0.3s_both] h-full z-30"
          >
            <div
              class="relative z-1 flex items-center justify-end ml-auto w-full md:max-w-117.5 h-full"
            >
              <div class="rounded-[30px] relative overflow-hidden h-85">
                <video
                  class="object-cover size-full"
                  id="staco-h6-video"
                  loop="true"
                  autoplay="true"
                  playsinline="true"
                  preload="auto"
                  ref="videoRef"
                  muted="true"
                  @canplay="handleCanPlay"
                >
                  <source
                    src="https://staco-react.vercel.app/assets/h6-video-DaLtBHE1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <button
                  id="staco-h6-video-control"
                 v-show="isLoaded"
                  @click="togglePlay"
                  class="absolute size-12.5 right-7.5 bottom-7.5 rounded-[50%] flex items-center justify-center bg-white text-olive-active border-none outline-none focus:outline-0 cursor-pointer"
                >
                  <IconPause v-if="isPlaying" />
                  <IconPlay v-else />
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </main>
  </section>
</template>

<style lang="css" scoped>
.select {
  display: none;
}
</style>
