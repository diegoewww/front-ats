import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // nextUi

    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input|image|avatar|user|card|divider|spinner|table|dropdown|link|badge|pagination|chiptooltip|popover|card|chip|tooltip|select|scroll-shadow|accordion|navbar|checkbox|tabs|radio|slider|autocomplete).js'

  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['var(--font-kanit)'],
        comfortaa: ['var(--font-comfortaa)'],
        mali: ['var(--font-mali)']
      },
      colors: {
        surfaceOverlay: 'var(--surface-overlay)',
        surfaceHover: 'var(--surface-hover)',
        surfaceBorder: 'var(--surface-border)',
        surfaceCard: 'var(--surface-card)',
        surfaceSection: 'var(--surface-section)',
        surfaceGround: 'var(--surface-ground)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        meteor: 'meteor 5s linear infinite',
        'text-gradient': 'text-gradient 1.5s linear infinite',
        spin: 'spin calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - var(--gap)/2))' }
        },
        'text-gradient': {
          to: {
            backgroundPosition: '200% center'
          }
        },
        spin: {
          '0%': {
            rotate: '0deg'
          },
          '15%, 35%': {
            rotate: '90deg'
          },
          '65%, 85%': {
            rotate: '270deg'
          },
          '100%': {
            rotate: '360deg'
          }
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)'
          }
        }
      }
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
export default config
