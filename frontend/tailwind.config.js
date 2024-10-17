/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px":"400px"
      },
      keyframes:{
        show_dd:{
          "0%" :{
            transform: "scale(0.5) translateY(-200px)",
            opacity: "0",
          },
          "100%":{
            transform: "scale(1) translateY(0)",
            opacity: "1"
          },
        },
        hide_dd:{
          "0%":{
            transform: "scale(1) translateY(0)",
            opacity: "1"
          },
          "80%":{
            opacity: "0",
          },
          "100%":{
            transform: "scale(0.8) translateY(-100px)",
            opacity: "0",
          }
        },
        show_sidebar:{
          "0%":{
            transform:"translateX(100px)",
            opacity:"0",
          },
          "100%":{
            transform:"translateX(0)",
            opacity:"1"
          }
        },
        hide_sidebar:{
          "0%":{
            transform:"translateX(0)",
            opacity:"1",
          },
          "100%":{
            transform:"translateX(100px)",
            opacity:"0",
          }
        }
      },
      animation: {
        show_dd: "show_dd 200ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        hide_dd: "hide_dd 200ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        show_sidebar: "show_sidebar 200ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        hide_sidebar: "hide_sidebar 200ms ease-in forwards",
      },
    },
  },
  plugins: [],
};
