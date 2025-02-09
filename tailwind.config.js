/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Primary Colors (Main Brand Colors)
        primary: {
          DEFAULT: "#2B4FFF", // blue - Main primary color
          light: "#5C78FF", // brightBlue
          dark: "#3D2AFF", // yellow (using as dark variant)
          hover: "#5EA2FF", // brightPurple
        },

        // Secondary Colors (Accent Colors)
        secondary: {
          DEFAULT: "#7129FF", // green
          light: "#905AFF", // brightGreen
          dark: "#A52AFF", // red
          hover: "#BA5AFF", // brightRed
        },

        // Accent Colors
        accent: {
          cyan: "#28B9FF",
          brightCyan: "#5AC8FF",
          purple: "#2883FF",
        },

        // Background Colors
        background: {
          DEFAULT: "#1A1A1A", // background
          dark: "#121212", // black
          card: "#1A1A1A", // for cards/sections
          light: "#FFFFFF", // light mode background
        },

        // Text Colors
        text: {
          primary: "#F1F1F1", // white/foreground
          secondary: "#666666", // brightBlack
          bright: "#FFFFFF", // brightWhite
          dark: "#1A1A1A", // dark text for light mode
        },
      },

      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "40px",
      },

      boxShadow: {
        glow: "0 0 20px rgba(92, 120, 255, 0.3)",
        "glow-lg": "0 0 30px rgba(92, 120, 255, 0.4)",
        "glow-xl": "0 0 40px rgba(92, 120, 255, 0.5)",
        navbar:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },

      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
        "slide-down": "slideDown 0.5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(to right, var(--tw-gradient-stops))",
      },

      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },

      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },

      transitionDuration: {
        400: "400ms",
      },

      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
