/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    data: {
      checked: 'ul~="checked"',
    },
    screens:{
      "sm":"575px",
      "md":"768px",
      "lg":"992px",
      "xl":"1200px"
    },
    extend: {
      boxShadow: {
        'box-shodow': '0px 8px 24px rgba(149, 157, 165, 0.2)',
    },
  },
  plugins: [],
}
}

