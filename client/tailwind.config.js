import forms from '@tailwindcss/forms';
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    'text-delete', 'ring-delete', 'focus:ring-delete', 'active:bg-delete-200', 'hover:bg-delete-200', 'bg-delete', 'hover:text-delete',
    'text-purple2', 'ring-purple2', 'focus:ring-purple2', 'active:bg-purple2-200', 'hover:bg-purple2-200','bg-purple2','hover:text-purple2',
    'fill-red-700'
  ],
  theme: {
    extend: {
      colors: {
        'gray-main': "#949495",
        'gray-icon': "#787486",
        'gray-text': "#334054",
        'gray-container': "#F5F7F9",
        'purple1': "#6B21A8",
        'purple2': "#5046E5",
        'purple3': "#ACA6FF",
        'faded-gray': "#EEF2FF",
        'gray1': "#808084",
        'gray2': "#7A7B80",
        'delete': "#C44B3F",
        'delete2': "#FF7B6E"
      },
      fontFamily: {
        body: ['Nunito']
      },
      fontSize: {
        'xxxs': '0.575rem',
        'xxs': '0.675rem',
      }
    },
  },
  plugins: [
    forms,
  ],
}