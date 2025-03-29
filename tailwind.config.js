module.exports = {
  theme: {
    extend: {
      animation: {
        "moving-gradient": "gradientShift 2s linear infinite",
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0px 50%" },
          "100%": { backgroundPosition: "-100px 50%" },
        },
      },
    },
  },
  plugins: [],
};
