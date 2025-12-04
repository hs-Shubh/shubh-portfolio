import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e8edff',
          200: '#cdd8ff',
          300: '#aabaff',
          400: '#7f91ff',
          500: '#5668ff',
          600: '#3946e6',
          700: '#2d37b3',
          800: '#242d8f',
          900: '#202873'
        }
      }
    }
  },
  plugins: []
}

export default config
