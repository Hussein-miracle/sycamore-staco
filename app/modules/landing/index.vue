<script lang="ts" setup>
import {
  LandingHeroSection,
  LandingDisclaimerSection,
  LandingFooterSection,
} from "./components";

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "keywords",
      content: "Staco, Finance Landing page,Nuxt 4,Tailwindcss, Nuxt UI",
    },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Staco";
const description = "Staco - SaaS Startup Business Landing Page";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/images/staco-logo.svg",
  twitterImage: "/images/staco-logo.svg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="w-full bg-white">
    <LandingHeroSection  />
    <div class="mb-75 relative z-99">
      <div class="w-full h-[50vh] block relative bg-neutral-100 z-50" />
      <LandingFooterSection />
      <LandingDisclaimerSection />
    </div>
  </div>
</template>
