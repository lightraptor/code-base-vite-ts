const COLORS = {
  primary: 'var(--primary)',
  hoverPrimary: 'var(--hoverPrimary)',
  baseBackground: 'var(--baseBackground)',
  baseText: 'var(--baseText)',
  baseBorder: 'var(--baseBorder)',
  baseBackgroundTextButton: 'var(--baseBackgroundTextButton)',
  baseBackgroundTextButtonHoverDarkTheme: 'var(--baseBackgroundTextButtonHoverDarkTheme)'
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors: COLORS }
  },
  plugins: []
}
