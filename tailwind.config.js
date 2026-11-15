/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Fundo claro de "lona" e tinta
        paper: '#F7F5F0',
        ink: {
          DEFAULT: '#111827',
          soft: '#4B5563',
        },
        // Azul da marca, usado como cor dominante de seções inteiras
        lona: {
          DEFAULT: '#1D4ED8',
          deep: '#1E3A8A',
          sky: '#DCE7FF',
        },
        coral: {
          DEFAULT: '#FF6B4A',
          // versão clara para texto sobre o azul (contraste ≥ 4:1)
          soft: '#FFA48E',
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
