module.exports = {
  content: [
    "./**/*.{html, js, css}",
    "../layouts/**/*.php"
  ],
  theme: {
    screens: {
      xl: "1700px",
      lg: "1400px",
      pc: "1240px",
      md: "960px",
      tb: "768px",
      sm: "600px",
      sp: "414px",
      xs: "374px",
      min: "320px",
    },
    fontFamily: {
      sans: ["TsukuGoPr5-R-DINNextLTPro-Light", "sans-serif"],
      bold: ["TsukuGoPro-B-DINNextLTPro-Medium", "sans-serif"],
    },
    transitionTimingFunction: {
      "in-quad": "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
      "in-cubic": "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
      "in-quart": "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
      "in-quint": "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
      "in-sine": "cubic-bezier(0.470,  0.000, 0.745, 0.715)",
      "in-expo": "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
      "in-circ": "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
      "in-back": "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      "out-quad": "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
      "out-cubic": "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
      "out-quart": "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
      "out-quint": "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
      "out-sine": "cubic-bezier(0.390,  0.575, 0.565, 1.000)",
      "out-expo": "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
      "out-circ": "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
      "out-back": "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
      "in-out-quad": "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
      "in-out-cubic": "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
      "in-out-quart": "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
      "in-out-quint": "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
      "in-out-sine": "cubic-bezier(0.445,  0.050, 0.550, 0.950)",
      "in-out-expo": "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
      "in-out-circ": "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
      "in-out-back": "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
    },
    extend: {
      maxWidth: {
        "8xl": "88rem",
      },
      colors: {
        "theme-orange-50": "#e8ff1c",
        "theme-orange-100": "#fbff14",
        "theme-orange-200": "#ffef0d",
        "theme-orange-300": "#ffda05",
        "theme-orange-400": "#fcc200",
        "theme-orange-500": "#f5a700",
        "theme-orange-600": "#ed8e00",
        "theme-orange-700": "#e67700",
        "theme-orange-800": "#de6000",
        "theme-orange-900": "#d64b00",
        "theme-green-50": "#93b6b1",
        "theme-green-100": "#79b9b0",
        "theme-green-200": "#5dbeb1",
        "theme-green-300": "#3fc6b4",
        "theme-green-400": "#29c4b0",
        "theme-green-500": "#19bea8",
        "theme-green-600": "#0bb49e",
        "theme-green-700": "#00a892",
        "theme-green-800": "#00917e",
        "theme-green-900": "#00ad96",
        "theme-brown-700": "#382d29",
        pdf: "#b30c00",
        excel: "#117e43",
        word: "#1c58bd",
      },
      backgroundImage: {
        'gradient-theme': 'linear-gradient(135deg, var(--theme-orange-700), var(--theme-orange-500) 50%, var(--theme-green-700) 50%, var(--theme-green-500))',
        'gradient-orange': 'linear-gradient(135deg, var(--theme-orange-700), var(--theme-orange-500))',
        'gradient-green': 'linear-gradient(135deg, var(--theme-green-700), var(--theme-green-500))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": "#18bca7",
            img: {
              "border-radius": ".5rem"
            }
          },
        },
      }),
      keyframes: {
        fluffy: {
          "0%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fluffy: "fluffy 6s linear infinite",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
    require("tailwindcss-font-size")({
      baseSize: 16,
      minSize: 10,
      maxSize: 114,
    }),
  ],
};
