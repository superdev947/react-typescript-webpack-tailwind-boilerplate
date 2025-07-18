import withMT from '@material-tailwind/react/utils/withMT'

const config = withMT({
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {},
    extend: {
      colors: {
        // Custom theme colors can be added here
      }
    },
    transformOrigin: {},
    fontFamily: {}
  },
  variants: {},
  plugins: []
})

export default config
