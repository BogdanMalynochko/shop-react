/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '20px',
                screens: {
                    sm: '1200px',
                    md: '1200px',
                    lg: '1200px',
                    xl: '1240px',
                    '2xl': '1445px',
                },
            },
        },
    },
    plugins: [],
};
