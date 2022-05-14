const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: colors.green[600],
        links: {
          txt: colors.green[600],
          hover_txt: colors.green[700],
        },
        loading_spinner: colors.green[500],
        popups: {
          bg: colors.black, //fondo recuadros blancos
          txt: colors.green[600], //color de texto de wallet, supply, status, precio de mint y texto inferior
          internal_border: colors.green[200],
        },
        warning: {
          txt: colors.green[500], //Texto superior bajo el titulo
          bg: colors.green[400],
          border: colors.green[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.green[800],
          bg: colors.black,
          border: colors.green[200],
          hover_txt: colors.green[800],
          hover_bg: colors.green[100],
          hover_border: colors.green[200],
        },
        btn_primary: {
          txt: colors.green,
          bg: colors.green[500],
          border: colors.green[500],
          hover_txt: colors.green,
          hover_bg: colors.green[600],
          hover_border: colors.green[600],
        },
        btn_error: {
          txt: colors.green,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.green,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.green[400], //El numero junto al color define el brillo
        txt_input: {
          txt: colors.green[600],
          bg: colors.black,
          border: colors.slate[200],
          focus_txt: colors.lime[600],
          focus_bg: colors.slate[50],
          focus_border: colors.lime[300],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.green[800],
          bg: colors.lime[100],
        },

        // Mint widget
        token_preview: colors.black[200], //color de fondo del preview
      },
    },
  },
  variants: {},
  plugins: [],
};
