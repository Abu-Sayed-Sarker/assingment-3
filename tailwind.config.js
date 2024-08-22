/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        full_body: "rgb(244, 244, 244)",
        gradint_color_1: "rgb(255, 255, 255)",
        gradint_color_2: "rgba(255, 255, 255, 0)",
        textColor: "#212121",
        praimary_color: "#ABEF5F",
        secoundery_text_color: "rgb(115, 115, 115)",
        secoundery_p_color: "rgb(73, 73, 73)",
        secound_btn_color: "rgba(171, 239, 95, 0.5)",
        card1: "rgb(231, 193, 211)",
        card2: "rgb(239, 218, 110)",
        card3: "rgb(164, 218, 195)",
        card4: "rgb(119, 170, 234)",
        btn_bg_color: "rgba(171, 239, 95, 0.2)",
        border_color: "rgb(233, 233, 233)"
      },
      fontFamily: {
        Manrope: "Manrope, sans-serif;"
      },
      backgroundImage: {
        form_bg: "url(./assets/bg.jpg)",
      }
    },
  },
  plugins: [],
}

