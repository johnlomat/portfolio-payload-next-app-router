import type { Config } from 'tailwindcss'
const flowbite = require('flowbite-react/tailwind')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        montserrat: ['var(--font-montserrat)'],
        'open-sans': ['var(--font-open-sans)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [flowbite.plugin()],
}
export default config
