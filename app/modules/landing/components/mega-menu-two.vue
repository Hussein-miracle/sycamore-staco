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
      <UPopover
        mode="hover"
        :open-delay="100"
        :close-delay="300"
        class="bg-transparent outline-none focus:outline-none border-none relative w-fit"
      >
        <div class="flex items-center gap-2">
          <span>Auth and Utility</span>
          <span
            class="size-fit inline-flex items-center justify-center transition-all group-hover:rotate-90 delay-75 duration-300"
          >
            <UIcon name="i-lucide-chevron-right" class="size-4 text-[#444]" />
          </span>
        </div>

        <template #content>
          <ul
            class="bg-white px-6 py-3 absolute top-1/2 left-[400%] flex flex-col gap-4 rounded-xl"
          >
            <li class="group">
              <span
                class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
                >Login</span
              >
            </li>
            <li class="group">
              <span
                class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300 whitespace-nowrap"
                >Sign Up</span
              >
            </li>
            <li class="group">
              <span
                class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300 whitespace-nowrap"
                >Reset Password</span
              >
            </li>
            <li class="group">
              <span
                class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300 whitespace-nowrap"
                >Terms and Policy</span
              >
            </li>
          </ul>
        </template>
      </UPopover>
    </li>
    <li class="group">
      <span
        class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
        >Latest and Blog</span
      >
    </li>
    <li class="group">
      <span
        class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
        >Blog Details</span
      >
    </li>
    <li class="group">
      <span
        class="text-[#444] group-hover:text-[#444]/[0.698] transition ease-in-out duration-300"
        >Contact&nbsp;Us</span
      >
    </li>
  </ul>
</template>

<style lang="css" scoped></style>
