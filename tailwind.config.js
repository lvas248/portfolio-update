/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/**/*.{js, jsx, ts, tsx}'
 ],
 theme: {
  extend: {
    keyframes: {

      glideInRight: {
        '0%': { transform: 'translate(-100%)'},
        '100%': { transform: 'translateX(0)'},
      },
      glideInLeft: {
        '0%': { transform: 'translateX(-150%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
      glideOutRight: {
        '0%': { transform: 'translateX(0)', opacity: 1},
        '100%': { transform: 'translateX(150%)', opacity: 0},
      },
      glideOutLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-150%)' },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0.2 },
      },
      glideInTop: {
        '0%': { transform: 'translateY(-1000%)'},
        '100%': { transform: 'translateX(0)'},
      },      
      glideInBottom: {
        '0%': { transform: 'translateY(500%)'},
        '100%': { transform: 'translateX(0)'},
      },
      glideIntoFPosition: {
        '0%': { transform: 'translateX(0)'},
        '100%': { transform: 'translateX(-67vw)'},
      },
      glideIntoThPosition: {
        '0%': { transform: 'translateX(0)'},
        '100%': { transform: 'translateX(-45vw)'},
      },
      glideIntoTwPosition: {
        '0%': { transform: 'translateX(0)'},
        '100%': { transform: 'translateX(-22vw)'},
      },
      scaleUp: {
        '0%': { transform: 'scale(1)'},
        '100%': { transform: 'scale(1.05)'},
      },
      scaleLarge: {
        '0%': { transform: 'scale(1)'},
        '100%': { transform: 'scale(1.3)'},
      },
      rotateIn:{
        '0%': { transform: 'rotate(0)'},
        '100%':{ transform: 'rotate(180deg)'}
      },
      wiggle:{
        '0%': { transform: 'rotate(0)'},
        '3%':{ transform: 'rotate(1deg)'},
        '6%':{ transform: 'rotate(0deg)'},
        '9%':{ transform: 'rotate(-1deg)'},
        '12%': { transform: 'rotate(0)'},
        '15%':{ transform: 'rotate(1deg)'},
        '18%':{ transform: 'rotate(0deg)'},
        '21%':{ transform: 'rotate(-1deg)'},
        '24%':{ transform: 'rotate(0)'},
        '100%': { transform: 'rotate(0)'},
      },

      scaleIn: {
        '0%': { transform: 'scale(0)'},
        '100%': { transform: 'scale(1)'},
      },
      scaleSelect:  {
        '0%': { transform: 'scale(1)'},
        '100%': { transform: 'scale(1.3)'},
      },
      delayedRotate: {
        '0%': { transform: 'rotate(0)'},
        '80%': { transform: 'rotate(0)'},
        '100%': { transform: 'rotate(180deg)'},
      },
 
      riseIn:{
        '0%': { transform: 'translateY(10%)'},
        '100%': { transform: 'translateY(0)'}
      },
      rotateSlightly: {
        '0%': { transform: 'rotate(0)'},
        '25%': { transform: 'rotate(2deg)'},
        '50%': { transform: 'rotate(0)'},
        '75%': { transform: 'rotate(-2deg)'},
        '100%':{ transform: 'rotate(0)'}
      },

      centerExpand:{
        '0%': { transform: 'scale(1) translate(0%, 0%)'},
        '100%': {transform: 'scale(1.1)', width: '90vw', height: '90vh'}
      },
      
      grow:{
        '0%': { transform: 'scale(1) '},
        '100%': {transform: 'scale(1)', width: '90vw', height: '90vh'}
      }

    },

    animation: {
      'glide-in-right': 'glideInRight 01s ease-out',
      'glide-in-left': 'glideInLeft 0.7s ease-out',

      'glide-out-right-fast': 'glideOutRight 0.3s ease-out',
      'glide-out-left-fast': 'glideOutLeft 0.3s ease-in',

      'glide-in-right-fast': 'glideInRight 0.3s ease-in',
      'glide-in-left-fast': 'glideInLeft 0.3s ease-in',

      'fade-in': 'fadeIn 2.5s forwards',
      'fade-in-fast': 'fadeIn .5s forwards',
      'fade-in-slow': 'fadeIn 3s forwards',

      'fade-out': 'fadeOut 0.75s forwards',

      'glide-in-top': 'glideInTop 1s ease-out',
      'glide-in-bottom': 'glideInBottom 01s ease-out',
      'glide-in-bottom-fast': 'glideInBottom 0.5s ease-out',

      'glide-from-fourth-position': 'glideIntoFPosition 1s forwards',
      'glide-from-third-position': 'glideIntoThPosition 1s forwards',
      'glide-from-second-position': 'glideIntoTwPosition 1s forwards',

      'select': 'scaleUp 0.75s forwards',

      'rotate-in':'rotateIn 0.5s ease-out',

      'wiggle-it':'wiggle 1s infinite',

      'scale-in':'scaleIn 0.70s ease-out',

      'scale-select':'scaleSelect 0.3s forwards ease-out', 

      'delayed-rotate':'delayedRotate 2s ease-out infinite',

      'rise-in':'riseIn .5s ease-in forwards',

      'wiggle-in':'wiggle 3s ease-in',

      'rotate-slightly': 'rotateSlightly 400ms forwards',

      'center-expand': 'centerExpand 1s forwards',

      'scale-up': 'scaleUp 300ms forwards',

      'scale-large': 'scaleLarge 300ms forwards'



    },
  },
},
  plugins: [],
}

