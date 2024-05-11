module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        sm: '6px',
        custom: '10px',
        md: '12px',
        lg: '14px',
      },
      boxShadow: {
        custom: '0px 4px 16px 0px rgba(164, 174, 193, 0.1)',
      },
      colors: {
        primary: '#FD4100',
        greenPrimary: '#26B753',
        gray: {
          50: '#F9F9FB',
          100: '#E2E5EB',
          150: '#8C929B',
          200: '#6F7383',
          250: '#8996AE',
          300: '#272A37',
          350: '#EEF2F7',
          400: '#C2C9D8',
          450: '#454857',
          500: '#1B1D25',
          600: '#D8DBE2',
        },
        red: {
          200: '#FF3B30',
          300: '#FFE3E3',
        },
        orange: {
          500: '#FD4100',
        },
      },
      fontSize: {
        xxs: '11px',
        xs: '12px',
        sm: '13px',
        md: '14px',
      },
    },
  },
  plugins: [],
};
