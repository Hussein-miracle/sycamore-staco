<script setup lang="ts"></script>

<template>
  <ul class="bg-white w-fit px-5 py-3 flex flex-col gap-3 rounded-xl">
    <li class="group">
      <span
        class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
        >About Us</span
      >
    </li>
    <li class="group">
      <span
        class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
        >Our Services</span
      >
    </li>
    <li class="group">
      <span
        class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
        >Pricing Plan</span
      >
    </li>
    <li class="group">
      <span
        class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300 flex items-center gap-1"
      >
        <UIcon name="i-lucide-chevron-right" class="size-4 text-inherit" />
      </span>

      <UPopover
        mode="hover"
        :open-delay="100"
        :close-delay="300"
        class="bg-transparent outline-none focus:outline-none border-none relative w-fit"
      >
        <div class="flex items-center gap-2">
          <span>Auth and Utility</span>
          <span
            class="size-fit inline-flex items-center justify-center transition-all group-hover:rotate-45 delay-75 duration-300"
          >
            <UIcon name="i-lucide-chevron-right" class="size-4 text-white" />
          </span>
        </div>

        <template #content>
          <ul class="bg-white w-fit px-4 py-2 absolute left-full flex flex-col gap-3 rounded-xl">
            <li class="group">
              <span
                class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
                >Login</span
              >
            </li>
            <li class="group">
              <span
                class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
                >Sign Up</span
              >
            </li>
            <li class="group">
              <span
                class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
                >Reset Password</span
              >
            </li>
            <li class="group">
              <span
                class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
                >Terms and Policy</span
              >
            </li>
          </ul>
        </template>
      </UPopover>
    </li>
  </ul>
</template>

<style lang="css" scoped></style>
