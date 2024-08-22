/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        full_body: "rgb(244, 244, 244)",
        gradint_color_1: "rgb(255, 255, 255)",
        gradint_color_2: "#FFFFFF",
        textColor: "#212121",
        praimary_color: "#ABEF5F",
        secoundery_text_color: "rgb(115, 115, 115)",
        secoundery_p_color: "rgb(73, 73, 73)",
        secound_btn_color: "rgba(171, 239, 95, 0.5)"
      },
      fontFamily: {
        Manrope: "Manrope, sans-serif;"
      }
    },
  },
  plugins: [],
}

