/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        bakbak: ['"Bakbak One"', 'system-ui'],
        inter: ['"Inter"', 'system-ui'],
      },
    },
    keyframes: {
        loop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // 절반만큼 이동했을 때 다시 처음으로
        },
      },
      animation: {
        'loop-scroll': 'loop 30s linear infinite', // 20초 동안 무한 반복
      },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px black',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

