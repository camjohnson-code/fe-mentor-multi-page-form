module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem', 
      },
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        body: '16px',
        h1: '2.5rem',
        h2: '1.5rem',
        h3: '1.25rem',
        h4: '1rem',
        h5: '0.875rem',
        h6: '0.75rem',
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
    },
  },
  plugins: [],
};
