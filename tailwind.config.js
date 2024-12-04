/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'main1blue': 'hsl(225, 100%, 94%)',
      'main2blue': 'hsl(245, 75%, 52%)',
      'neutral1blue': 'hsl(225, 100%, 98%)',
      'neutral2blue': 'hsl(224, 23%, 55%)',
      'neutral3blue': 'hsl(223, 47%, 23%)',
      },
      backgroundImage: {
        'pattern-desktop': "url('../images/pattern-background-desktop.svg')",
        'pattern-mobile': "url('../images/pattern-background-mobile.svg')",
      },
      screens: {
        'desktop': '1440px',
        'mobile': '768px',
      },
      boxShadow: {
        'card': '0 10px 30px -15px hsl(224, 23%, 55%)',
        'button': '0 15px 20px -5px rgba(56, 41, 224, 0.3)',
      },
    },
  },
  plugins: [],
}

