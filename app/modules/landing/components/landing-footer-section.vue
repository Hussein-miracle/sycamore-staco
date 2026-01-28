<template>
  <footer class="w-full px-5 z-800 relative">
    <section class="bg-background w-full rounded-[30px] opacity-100 overflow-hidden relative">
      <!-- <div class="size-full absolute bg-background"/> -->
      <div class="footer-top z-10">
        <div class="w-full lg:max-w-285 md:max-w-180 sm:max-w-135 mx-auto">
          <div class="flex flex-col lg:flex-row items-start gap-10 justify-between">
            <div class="flex-[0.45]">
              <div class="footer-card">
                <div class="footer-info">
                  <a href="#" class="footer-logo">
                    <div class="size-fit scale-[85%]">
                      <img
                        width="200"
                        height="100"
                        src="/images/staco-logo.svg"
                        loading="eager"
                        fetchpriority="high"
                        alt="Staco"
                      /></div
                  ></a>
                  <p class=" font-medium  text-[#ffffffb2]">
                    Staco is the dedicated platform for performance management
                    that helps to grow your startup quickly
                  </p>
                </div>
                <div class="footer-follow">
                  <ul class="social-link dark footer-one-social-link"></ul>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex justify-between items-start flex-wrap gap-3">
                <div class="md:w-1/2 md:flex-[0_0_auto] lg:w-1/4 lg:flex-[0_0_auto]  px-3.75">
                  <aside class="footer-widget">
                    <div class="mb-6.25 font-extrabold text-white">
                      <h6 class=" whitespace-nowrap">Products 🔥</h6>
                    </div>
                    <div class="widget-body">
                      <ul class=" text-[#ffffffb2] flex flex-col gap-3">
                        <li><a href="#">HR Management</a></li>
                        <li><a href="#">Invoice System</a></li>
                        <li><a href="#">Email Marketing</a></li>
                        <li><a href="#">Web Services</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div class="md:w-1/2 md:flex-[0_0_auto] lg:w-1/4 lg:flex-[0_0_auto]  px-3.75">
                  <aside class="footer-widget">
                    <div class="mb-6.25 font-extrabold text-white">
                      <h6  class=" whitespace-nowrap">Why choose 🌟</h6>
                    </div>
                    <div class="widget-body">
                      <ul class=" text-[#ffffffb2] flex flex-col gap-3">
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Why Staco ?</a></li>
                        <li><a href="#">Book a demo</a></li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div class="md:w-1/2 md:flex-[0_0_auto] lg:w-1/4 lg:flex-[0_0_auto]  px-3.75">
                  <aside class="footer-widget">
                    <div class="mb-6.25 font-extrabold text-white">
                      <h6  class=" whitespace-nowrap">Resources ❇️</h6>
                    </div>
                    <div class="widget-body">
                      <ul class=" text-[#ffffffb2] flex flex-col gap-3">
                        <li><a href="#">Latest Blog</a></li>
                        <li><a href="#">Supports</a></li>
                        <li><a href="#">Knowledgebase</a></li>
                        <li><a href="#">FAQs</a></li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div
                  class="md:w-1/2 md:flex-[0_0_auto] lg:w-1/4 lg:flex-[0_0_auto] px-3.75"
                >
                  <aside class="footer-widget">
                    <div class="mb-6.25 font-extrabold text-white">
                      <h6  class=" whitespace-nowrap">Company 💎</h6>
                    </div>
                    <div class="widget-body">
                      <ul class=" text-[#ffffffb2] flex flex-col gap-3">
                        <li><a href="#">About</a></li>
                        <li><a href="#">What we do</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Careers</a></li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main
        class="w-full py-7.5 border-t border-t-[#d9d9d91a] flex items-center justify-between text-[#ffffffb2] z-10"
      >
        <div
          class="w-full lg:max-w-285 md:max-w-180 sm:max-w-135 mx-auto flex items-center justify-between flex-wrap gap-3"
        >
          <div class="">
            <p>
              2025 <NuxtLink href="#">Staco</NuxtLink>. All rights reserved.
            </p>
          </div>

          <ul class="flex items-center justify-end gap-7.5">
            <li><NuxtLink href="#">Terms and conditions</NuxtLink></li>
            <li><NuxtLink href="#">Cookies</NuxtLink></li>
            <li><NuxtLink href="#">Privacy policy</NuxtLink></li>
          </ul>
        </div>
      </main>
    </section>
  </footer>
</template>

<style lang="css" scoped>
.footer-top {
  padding: 120px 0px 70px;
}
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

.row {
  margin: 0px -15px !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}

@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}

@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}

@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}
</style>
