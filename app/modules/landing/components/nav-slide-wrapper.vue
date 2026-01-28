<script setup lang="ts">
const { $cn: cn } = useNuxtApp();
defineProps<{
  index: number;
  name: string;
  currentHover: string | null;
  hoverIndex:number|null;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'absolute w-full transition-all duration-300',
        !!currentHover && name === currentHover ? 'opacity-100' : 'opacity-0 pointer-events-none',
        !isNaN(hoverIndex!) && hoverIndex === index ? 'transform-none' : !isNaN(hoverIndex!) && hoverIndex! > index ? '-translate-x-24' : 'translate-x-24'
      )
    "
  >
    <slot />
  </div>
</template>
