module.exports = {
  darkMode: 'media',
  content: [
    // "./public/**/*.{png,jpg,jpeg}",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/bg-desktop-dark.jpg')",
        'hero-pattern-light': "url('/public/images/bg-desktop-light.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
      
    },
    fontFamily: {
      'sans': ['Josefin Sans', 'Arial', 'sans-serif'] 
    },
    colors: {
      'mydark': '#161722',
      'mylight':'#FAFAFA',
      'desaturated-blue': '#25273C',
      'desaturated-light': '#FAFAFA',
      
      
    },
    textColor: {
      primary: 'blue',
      secondary: 'purple',
      white: "#FFF", 
      black: "#000",
      mygrey: "#393A4C",
      
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
