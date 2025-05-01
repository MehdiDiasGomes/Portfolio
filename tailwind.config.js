const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        mauve: "hsl(var(--mauve))",
        primaryPerso: '#CBACF9',
        secondaryPerso: '#CECECE',
        backgroundForeground: '#04071D',
        borderPerso: '#303247',
        hoverForegroundPerso: "#0d1132",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate,  function ({ addUtilities }) {
    addUtilities({
      '.mp-home': {
        padding: '0 3%',
        '@screen sm': { padding: '0 25%' },
        '@screen xl': { padding: '0 25%' },
        '@screen 2xl': { padding: '0 30%' },
      },
      '.text-xl': {
        '@screen sm': { fontSize: '2rem', lineHeight: '2rem' },
        '@screen xl': { fontSize: '2.5rem', lineHeight: '2.5rem' },
        '@screen 2xl': { fontSize: '3.125rem', lineHeight: '3.125rem' },
      },
      '.text-xxl': {
        '@screen sm': { fontSize: '2.25rem', lineHeight: '2.75rem' },
        '@screen md': { fontSize: '2.75rem', lineHeight: '3.25rem' },
        '@screen xl': { fontSize: '3rem', lineHeight: '3.75rem' },
        '@screen 2xl': { fontSize: '3.75rem', lineHeight: '4.875rem' },
      },
      '.text-l': {
        '@screen sm': { fontSize: '1.5rem', lineHeight: '2rem' },
        '@screen md': { fontSize: '2rem', lineHeight: '2.5rem' },
        '@screen xl': { fontSize: '2.25rem', lineHeight: '2.75rem' },
        '@screen 2xl': { fontSize: '2.5rem', lineHeight: '3.25rem' },
      },
      '.text-m': {
        '@screen sm': { fontSize: '1.125rem', lineHeight: '1.5rem' },
        '@screen md': { fontSize: '1.375rem', lineHeight: '1.75rem' },
        '@screen xl': { fontSize: '1.5rem', lineHeight: '2rem' },
        '@screen 2xl': { fontSize: '1.875rem', lineHeight: '2.4375rem' },
      },
      '.text-s': {
        '@screen sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
        '@screen md': { fontSize: '1rem', lineHeight: '1.375rem' },
        '@screen xl': { fontSize: '1.125rem', lineHeight: '1.5rem' },
        '@screen 2xl': { fontSize: '1.25rem', lineHeight: '1.625rem' },
      },
      '.text-intro': {
        '@screen sm': { fontSize: '1rem', lineHeight: '1.5rem' },
        '@screen md': { fontSize: '1.125rem', lineHeight: '1.75rem' },
        '@screen xl': { fontSize: '1.25rem', lineHeight: '2rem' },
        '@screen 2xl': { fontSize: '1.375rem', lineHeight: '2.0625rem' },
      },
      '.text-main': {
        '@screen sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
        '@screen md': { fontSize: '1rem', lineHeight: '1.5rem' },
        '@screen xl': { fontSize: '1.125rem', lineHeight: '1.75rem' },
        '@screen 2xl': { fontSize: '1rem', lineHeight: '1.5rem' },
      },
      '.text-legend': {
        '@screen sm': { fontSize: '0.75rem', lineHeight: '1rem' },
        '@screen md': { fontSize: '0.875rem', lineHeight: '1.25rem' },
        '@screen xl': { fontSize: '1rem', lineHeight: '1.5rem' },
        '@screen 2xl': { fontSize: '0.875rem', lineHeight: '1.3125rem' },
      },
      '.text-cta': {
        '@screen sm': { fontSize: '0.75rem', lineHeight: '1rem' },
        '@screen md': { fontSize: '0.875rem', lineHeight: '1.125rem' },
        '@screen xl': { fontSize: '1rem', lineHeight: '1.25rem' },
        '@screen 2xl': { fontSize: '0.875rem', lineHeight: '1.1375rem' },
      },
    })
  }, require('tailwindcss-animated'), require('@tailwindcss/typography')],
}