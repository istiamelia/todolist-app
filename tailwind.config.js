import { profile } from 'console';

export default {
  content: [
    "./views/*.ejs", // Update this path if your EJS files are located elsewhere
    // Include paths to other template files if needed
    "./src/*.ts",
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
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}