// plugins/cn.ts
import { defineNuxtPlugin } from '#app'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes))
}

export default defineNuxtPlugin((nuxtApp) => {
  // Inject `cn` globally as `$cn`
  nuxtApp.provide('cn', cn)
})
