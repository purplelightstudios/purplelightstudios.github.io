const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./themes/tailbliss/layouts/**/*.html', './themes/tailbliss/content/**/*.md', './layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Alatsi', 'ui-sans-serif', 'system-ui'],
      'serif': ['Alatsi', 'ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // https://colorkit.io/#f95142-#f2bb4e-10
        'primary': {
          DEFAULT: '#7137C8',
          50: '#EBE9D7',
          100: '#E1D7D8',
          200: '#D3C3D6',
          300: '#C5AFD4',
          400: '#B79BD2',
          500: '#A987D0',
          600: '#9B73CE',
          700: '#8D5FCC',
          800: '#7F4BCA',
          900: '#7137C8'
        },
        'secondary': {
          DEFAULT: '#F58146',
          50: '#F2BB4E',
          100: '#F1B14A',
          200: '#F2A549',
          300: '#F39948',
          400: '#F48D47',
          500: '#F58146',
          600: '#F67545',
          700: '#F76944',
          800: '#F85D43',
          900: '#4C0829'
        },
        'neutral': {
          DEFAULT: '#6B7280',
          50: '#CDD0D5',
          100: '#C2C5CC',
          200: '#ACB0BA',
          300: '#969BA7',
          400: '#7F8694',
          500: '#6B7280',
          600: '#515761',
          700: '#383C43',
          800: '#1E2024',
          900: '#050506'
        },
        // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
        // To generate color palettes: https://colorkit.io/#0d0d0f-#ebe9d7-10
        'gray': {
          DEFAULT: '#000',
          50: '#FFF',
          100: '#E0E0E0',
          200: '#C4C4C4',
          300: '#A8A8A8',
          400: '#8C8C8C',
          500: '#707070',
          600: '#545454',
          700: '#383838',
          800: '#1C1C1C',
          900: '#000'
        },
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[400]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.indigo[500]'),
            '--tw-prose-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
            '--tw-prose-invert-hr': theme('colors.zinc[500]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.indigo[400]'),
            '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],

  // Enabling SASS
  mode: 'jit',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
