/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme.js';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    debugScreens: {
      prefix: 'breakpoint: ',
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
        // ...
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss-debug-screens')
  ],
}

