<script setup lang="ts">
const { $cn:cn } = useNuxtApp()

withDefaults(
  defineProps<{
    title: string;
    variant?: "default" | "inverted";
  }>(),
  {
    variant: "default",
  },
);
</script>

<template>
  <button
    class="h-fit lg:h-12.5 w-fit font-bold focus:outline-0 outline-0 border-0 p-0.5 bg-transparent lg:text-base text-sm "
  >
    <span
      :class="cn(
        'size-full py-2 px-2.5 lg:py-3 lg:px-3.5 rounded-[100px]  bg-olive group hover:bg-olive-active flex items-center justify-center overflow-hidden transition duration-300 text-black-one transform-gpu',
        variant === 'inverted' && ' text-white bg-olive-active hover:bg-olive',)
      "
    >
      <span
        class="group-hover:-translate-y-[150%] transition duration-300 transform-gpu whitespace-nowrap"
        >{{ title }}</span
      >
      <span
        :class="cn(
          'translate-y-[150%] absolute group-hover:translate-y-0 transition duration-300 text-black-one group-hover:text-white transform-gpu whitespace-nowrap',
          variant === 'inverted' && 'group-hover:text-black-one text-white',)
        "
        >{{ title }}</span
      >
    </span>
  </button>
</template>
