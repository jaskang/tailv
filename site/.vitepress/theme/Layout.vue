<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { isBrowser } from 'kotl'

import { RadioCard, RadioGroup } from '../../../src'
import VPDoc from './components/VPDoc.vue'
import VPNavBar from './components/VPNavBar.vue'
import VPPage from './components/VPPage.vue'
import { useDataByTheme } from './utils'

const { frontmatter, isDark } = useDataByTheme()

const primary = ref('indigo')
const gray = ref('gray')

watchEffect(
  () => {
    if (isBrowser()) {
      const light = {
        '--tui-default': `var(--${gray.value}-300)`,
        '--tui-default-50': `var(--${gray.value}-50)`,
        '--tui-default-100': `var(--${gray.value}-100)`,
        '--tui-default-200': `var(--${gray.value}-200)`,
        '--tui-default-300': `var(--${gray.value}-300)`,
        '--tui-default-400': `var(--${gray.value}-400)`,
        '--tui-default-500': `var(--${gray.value}-500)`,
        '--tui-default-600': `var(--${gray.value}-600)`,
        '--tui-default-700': `var(--${gray.value}-700)`,
        '--tui-default-800': `var(--${gray.value}-800)`,
        '--tui-default-900': `var(--${gray.value}-900)`,
        '--tui-default-950': `var(--${gray.value}-950)`,
        '--tui-default-foreground': `var(--${gray.value}-700)`,
        '--tui-default-background': `var(--white)`,

        '--tui-primary': `var(--${primary.value}-500)`,
        '--tui-primary-50': `var(--${primary.value}-50)`,
        '--tui-primary-100': `var(--${primary.value}-100)`,
        '--tui-primary-200': `var(--${primary.value}-200)`,
        '--tui-primary-300': `var(--${primary.value}-300)`,
        '--tui-primary-400': `var(--${primary.value}-400)`,
        '--tui-primary-500': `var(--${primary.value}-500)`,
        '--tui-primary-600': `var(--${primary.value}-600)`,
        '--tui-primary-700': `var(--${primary.value}-700)`,
        '--tui-primary-800': `var(--${primary.value}-800)`,
        '--tui-primary-900': `var(--${primary.value}-900)`,
        '--tui-primary-950': `var(--${primary.value}-950)`,
        '--tui-primary-foreground': `var(--white)`,

        '--tui-background': `var(--tui-default-background)`,
        '--tui-foreground': `var(--tui-default-foreground)`,
        '--tui-border': `var(--${gray.value}-200)`,
        '--tw-ring-color': `var(--tui-border)`,
      }
      const dark = {
        '--tui-default': `var(--${gray.value}-700)`,
        '--tui-default-50': `var(--${gray.value}-900)`,
        '--tui-default-100': `var(--${gray.value}-800)`,
        '--tui-default-200': `var(--${gray.value}-700)`,
        '--tui-default-300': `var(--${gray.value}-600)`,
        '--tui-default-400': `var(--${gray.value}-500)`,
        '--tui-default-500': `var(--${gray.value}-400)`,
        '--tui-default-600': `var(--${gray.value}-300)`,
        '--tui-default-700': `var(--${gray.value}-200)`,
        '--tui-default-800': `var(--${gray.value}-100)`,
        '--tui-default-900': `var(--${gray.value}-50)`,
        '--tui-default-950': `var(--white)`,
        '--tui-default-foreground': `var(--${gray.value}-400)`,
        '--tui-default-background': `var(--${gray.value}-950)`,

        '--tui-primary': `var(--${primary.value}-500)`,
        '--tui-primary-50': `var(--${primary.value}-950)`,
        '--tui-primary-100': `var(--${primary.value}-900)`,
        '--tui-primary-200': `var(--${primary.value}-800)`,
        '--tui-primary-300': `var(--${primary.value}-700)`,
        '--tui-primary-400': `var(--${primary.value}-600)`,
        '--tui-primary-500': `var(--${primary.value}-500)`,
        '--tui-primary-600': `var(--${primary.value}-400)`,
        '--tui-primary-700': `var(--${primary.value}-300)`,
        '--tui-primary-800': `var(--${primary.value}-200)`,
        '--tui-primary-900': `var(--${primary.value}-100)`,
        '--tui-primary-950': `var(--${primary.value}-50)`,
        '--tui-primary-foreground': `var(--white)`,

        '--tui-background': `var(--tui-default-background)`,
        '--tui-foreground': `var(--tui-default-foreground)`,
        '--tui-border': `var(--${gray.value}-700)`,
        '--tw-ring-color': `var(--tui-border)`,
      }
      const themeVars: Record<string, string> = isDark.value ? dark : light
      Object.keys(themeVars).forEach(key => {
        document.body.style.setProperty(key, themeVars[key]!)
      })
    }
  },
  { flush: 'post' }
)
</script>

<template>
  <div class="min-h-screen">
    <VPNavBar></VPNavBar>
    <div class="flex items-center justify-center p-4">
      <div class="">主色调：</div>
      <RadioGroup class="flex gap-2" v-model:value="primary">
        <RadioCard value="orange" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-orange-500"></div>
        </RadioCard>
        <RadioCard value="yellow" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-yellow-500"></div>
        </RadioCard>
        <RadioCard value="lime" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-lime-500"></div>
        </RadioCard>
        <RadioCard value="emerald" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-emerald-500"></div>
        </RadioCard>
        <RadioCard value="teal" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-teal-500"></div>
        </RadioCard>
        <RadioCard value="cyan" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-cyan-500"></div>
        </RadioCard>
        <RadioCard value="sky" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-sky-500"></div>
        </RadioCard>
        <RadioCard value="blue" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-blue-500"></div>
        </RadioCard>
        <RadioCard value="indigo" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-indigo-500"></div>
        </RadioCard>
        <RadioCard value="violet" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-violet-500"></div>
        </RadioCard>
        <RadioCard value="purple" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-purple-500"></div>
        </RadioCard>
        <RadioCard value="fuchsia" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-fuchsia-500"></div>
        </RadioCard>
        <RadioCard value="pink" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-pink-500"></div>
        </RadioCard>
        <RadioCard value="rose" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-rose-500"></div>
        </RadioCard>
      </RadioGroup>
      <div class="mx-8 h-4 w-px bg-gray-300"></div>
      <div>灰色调：</div>
      <RadioGroup class="flex gap-2" v-model:value="gray">
        <RadioCard value="gray" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-gray-500"></div>
        </RadioCard>
        <RadioCard value="slate" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-slate-500"></div>
        </RadioCard>
        <RadioCard value="zinc" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-zinc-500"></div>
        </RadioCard>
        <RadioCard value="neutral" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-neutral-500"></div>
        </RadioCard>
        <RadioCard value="stone" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-stone-500"></div>
        </RadioCard>
      </RadioGroup>
    </div>
    <VPDoc v-if="frontmatter.layout !== false"></VPDoc>
    <VPPage v-else></VPPage>
  </div>
</template>
