/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
       extend: {
      backgroundImage:{
        'hero'   : "url('./assets/header.jpg')",
        'heroMob': "url('./assets/mheader.jpg')",
        'cerise' : "url('./assets/cerise.jpg')",
        'ceriseMob' : "url('./assets/mcerise.jpg')",
        'orange' : "url('./assets/orange.jpg')",
        'orangeMob' : "url('./assets/morange.jpg')"
      },
      colors:{
        //Primary
        SoftRed         : "hsl(7, 99%, 70%)",
        Yellow          : "hsl(51, 100%, 49%)",
        DarkdCyan       : "hsl(167, 40%, 24%)",
        DarkBlue        : "hsl(198, 62%, 26%)",
        DarkmCyan       : "hsl(168, 34%, 41%)",
        //Neutral
        VDDBlue         : "hsl(212, 27%, 19%)",
        DGBlue          : "hsl(232, 10%, 55%)",
        VDGBlue         : "hsl(213, 9%, 39%)",
        GrayishBlue     : "hsl(210, 4%, 67%)",
        white           : "hsl(0, 0%, 100%)",
      },

      fontFamily:{
        barlow  :['Barlow', 'sans-serif'],
        fraunces:['Fraunces', 'serif']
      },

      fontSize:{
        base:"18px"
      },

      fontWeight:{
        normal: "300",
        medium: "500",
        bold  : "700",
      },

      screens:{
        'xs' : '375px',
        'sm' : '640px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl': '1536px',
      }

    },
  },
  plugins: [],
}

