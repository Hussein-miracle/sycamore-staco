import { type ClassValue } from 'clsx'

declare module '#app' {
  interface NuxtApp {
    $cn: (...classes: ClassValue[]) => string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $cn: (...classes: ClassValue[]) => string
  }
}
