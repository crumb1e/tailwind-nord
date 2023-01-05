const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ theme }) {

}, {
    theme: {
        extend: {
            colors: theme => ({
                /* Classic Nord color names */
                'nord0': '#2E3440',
                'nord1': '#3B4252',
                'nord2': '#434C5E',
                'nord3': '#4C566A',
                'nord4': '#D8DEE9',
                'nord5': '#E5E9F0',
                'nord6': '#ECEFF4',
                'nord7': '#8FBCBB',
                'nord8': '#88C0D0',
                'nord9': '#81A1C1',
                'nord10': '#5E81AC',
                'nord11': '#BF616A',
                'nord12': '#D08770',
                'nord13': '#EBCB8B',
                'nord14': '#A3BE8C', 'nord15': '#B48EAD',

                /* Tailwind-like Nord color names */
                'nord-0': '#2E3440',
                'nord-1': '#3B4252',
                'nord-2': '#434C5E',
                'nord-3': '#4C566A',
                'nord-4': '#D8DEE9',
                'nord-5': '#E5E9F0',
                'nord-6': '#ECEFF4',
                'nord-7': '#8FBCBB',
                'nord-8': '#88C0D0',
                'nord-9': '#81A1C1',
                'nord-10': '#5E81AC',
                'nord-11': '#BF616A',
                'nord-12': '#D08770',
                'nord-13': '#EBCB8B',
                'nord-14': '#A3BE8C',
                'nord-15': '#B48EAD',
            })
        }
    }
})
