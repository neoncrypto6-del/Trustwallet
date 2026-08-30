export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#08081F',
          muted: '#5A5A72',
          faint: '#8A8AA0',
        },
        brand: {
          DEFAULT: '#1B15E8',
          hover: '#150FBE',
          soft: '#EEEDFF',
        },
        mint: '#00D69E',
        surface: '#FFFFFF',
        canvas: '#F6F6FB',
        hairline: '#E6E6F0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1200px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
