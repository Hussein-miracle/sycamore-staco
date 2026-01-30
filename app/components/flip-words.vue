<script setup lang="ts">
import { Motion, AnimatePresence } from "motion-v";
const { $cn: cn } = useNuxtApp();

interface Props {
  words: string[];
  duration?: number;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 3000,
});

const currentWord = ref(props?.words[0]);
const isAnimating = ref(false);
let timeoutId: number | null = null;

const startAnimation = () => {
  const currentIndex = props.words.indexOf(currentWord.value!);
  const nextWord = props.words[currentIndex + 1] || props.words[0];
  currentWord.value = nextWord;
  isAnimating.value = true;
};

const scheduleNext = () => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = window.setTimeout(() => {
    startAnimation();
  }, props.duration);
};

watch(isAnimating, async (val) => {
  if (!val) scheduleNext();
});

onMounted(() => {
  scheduleNext();
});

onBeforeUnmount(() => {
  if (timeoutId) clearTimeout(timeoutId);
});

const wordsSplit = computed(() => currentWord.value?.split?.(" "));
</script>

<template>
  <AnimatePresence @exit-complete="isAnimating = false">
    <Motion
      :key="currentWord"
      as="div"
      :initial="{ opacity: 0, y: 10 }"
      :animate="{ opacity: 1, y: 0 }"
      :exit="{
        opacity: 0,
        y: -40,
        x: 40,
        filter: 'blur(8px)',
        scale: 2,
        position: 'absolute',
      }"
      :transition="{
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }"
      :class="cn('z-10 inline-block relative text-left text-olive', className)"
    >
      <span
        v-for="(word, wordIndex) in wordsSplit"
        :key="word + wordIndex"
        class="whitespace-nowrap inline-flex flex-col items-start relative"
      >
        <!-- Word
        <Motion
          as="span"
          class="inline-block"
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0 }"
                    :transition="{
            delay: wordIndex * 0.3,
            duration: 0.25,
            ease: 'easeOut',
          }"
        >
          {{ word }}
        </Motion> -->

        <!-- Underline -->
        <!-- <Motion
          as="span"
          class=" bg-olive origin-left h-4"
          :style="{ width: '100%' }"
          :initial="{ scaleX: 0.05 }"
          :animate="{ scaleX: 1 }"
          :transition="{
            delay: wordIndex * 0.3,
            duration: 0.25,
            ease: 'linear',
          }"
        /> -->
        <Motion
          as="span"
          :initial="{ opacity: 0, y: 10, filter: 'blur(8px)' }"
          :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
          :transition="{
            delay: wordIndex * 0.3,
            duration: 0.3,
          }"
          class="block relative"
        >
          <span class="block">
            <Motion
              v-for="(letter, letterIndex) in word.split('')"
              :key="letter + letterIndex"
              as="span"
              :initial="{ opacity: 0, y: 10, filter: 'blur(8px)' }"
              :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
              :transition="{
                delay: wordIndex * 0.3 + letterIndex * 0.05,
                duration: 0.2,
              }"
              class="inline-block"
            >
              {{ letter }}
            </Motion>
          </span>
          <Motion
            as="span"
            :style="{ width: '100%' }"
            :initial="{ scaleX: 0.005 }"
            :animate="{ scaleX: 1 }"
            :exit="{ scaleX: 0 }"
            :transition="{
              delay: wordIndex * 0.3,
              duration: 0.3,
              ease: 'easeOut',
            }"
            class="block origin-left bg-olive  h-2 lg:h-3.5 lg:-mt-3"
          >
          </Motion>
        </Motion>
        <!-- <span class="inline-block">&nbsp;</span> -->
      </span>
    </Motion>
  </AnimatePresence>
</template>
