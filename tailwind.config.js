/** @type {import('tailwindcss').Config} */

const {Colors} = require('./constants/Colors.ts')

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom-light': 'gilroyLight',
        'custom-normal': 'gilroy',
        'custom-bold': 'gilroyBold',
        'custom-medium': 'gilroyMedium',
        'custom-extraBold': 'gilroyHeavy'
      },
      colors: {
        background: Colors.background,
        foreground: Colors.foreground,
        card: Colors.card,
        cardForeground: Colors.cardForeground,
        popover: Colors.popover,
        popoverForeground: Colors.popoverForeground,
        primary: Colors.primary,
        primaryForeground: Colors.primaryForeground,
        secondary: Colors.secondary,
        secondaryForeground: Colors.secondaryForeground,
        muted: Colors.muted,
        mutedForeground: Colors.mutedForeground,
        accent: Colors.accent,
        accentForeground: Colors.accentForeground,
        destructive: Colors.destructive,
        destructiveForeground: Colors.destructiveForeground,
        border: Colors.border,
        input: Colors.input,
        ring: Colors.ring,
      },
    },
  },
  plugins: [],
}

