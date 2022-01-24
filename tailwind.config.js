module.exports = {
  // darkMode: false, // or 'media' or 'class'
  // purge: {
    // enabled: true, tailwind 기본적으로 JIT엔진 사용
  content: [
    // "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    container: {
      center: true,
    },
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    // colors: {
    //   'regal-blue': '#243c5a',
    // },
    //fontFamily? fontsize정도 빼고는 확장으로 써야겠네
    extend: {
      // 테마 옵션의 기본 값을 유지하면서 새 값도 추가하려면 extend
      colors: {
        'bluesky': '#243c5a',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
