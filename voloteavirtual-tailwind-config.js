module.exports = {
    config: {
        theme: {
            extends: {
                // Extend Heights
                height: () => ({
                    120: '30rem',
                    144: '36rem',
                    150: '40rem',
                    map: '40.3rem'
                }),
                // Screen Sizes
                screens: {
                    'xs': '475px'
                },
                // Add color classes to  'active' state
                backgroundColor: ['active'],
                textColor: ['active'],
                // Animations
                keyframes: {
                    wiggle: {
                        '0%, 100%': { transform: 'rotate(-1deg)' },
                        '50%': { transform: 'rotate(2.5deg)' },
                    },
                },
                animation: {
                    wiggle: 'wiggle 15s ease-in-out infinite'
                },
                // Colors Extension
                colors: {
                    volotea: {
                        'DEFAULT': '#45232C',
                        'background': '#e73e6d' 
                    },
                },
                boxShadow: {
                    'md-dark': '1px 1px 7px 1px rgba(0, 0, 0, 0.2)',
                    'md-dark-contrast': '1px 1px 7px 1px rgba(0, 0, 0, 0.35)',
                    'lg-dark': '1px 1px 10px 1px rgba(0, 0, 0, 0.15)',
                    '2xl-light': '0 0 50px -20px rgba(255, 255, 255, 0.15)',
                },
            },
        },
        variants: {
            extend: {
                // Add opacity to 'disabled' classes
                opacity: ['disabled']
            }
        },
    },
    handler: function(){}
}