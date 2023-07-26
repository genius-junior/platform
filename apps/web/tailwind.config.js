// tailwind config is required for editor support

const sharedConfig = require('tailwind-config/tailwind.config.js');

module.exports = {
  presets: [sharedConfig],
  darkMode: 'class',
  variants: {
    height: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'hover', 'focus'],
  }
};
