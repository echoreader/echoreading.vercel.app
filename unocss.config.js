// unocss.config.ts
import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  include: [
    'src/**/*.astro',
    'src/**/*.mdx',
    'src/**/*.jsx',
    'src/**/*.tsx',
    'src/**/*.html',
  ],
  safelist: [
    'container','mx-auto','px-4',
    'font-sans',
    'border','border-solid','border-purple-700',
    'text-purple-700','hover:text-purple-500',
    'bg-gray-100','bg-white',
    'flex','flex-col','items-center','justify-between','gap-4',
    'h-16','py-6','mt-12',
    'max-w-4xl',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
})
