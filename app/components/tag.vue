<script setup lang="ts">
const { $cn: cn } = useNuxtApp();

defineProps<{
  variant: "hot" | "new" | "trendy";
}>();
</script>
<template>
  <span
    :class="
      cn(
        'rounded-xl px-1.5 py-0.5 mx-1 capitalize! font-medium',
        variant === 'hot' && 'bg-[#fd246a] text-white',
        variant === 'trendy' && 'bg-[#9fe870] text-[#444]',
        variant === 'new' && 'bg-[#0095ff] text-white',
      )
    "
  >
    {{ variant.slice(0,1).toUpperCase() + variant.slice(1).toLowerCase() }}
  </span>
</template>
