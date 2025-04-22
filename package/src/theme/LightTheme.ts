import type { ThemeTypes } from '@/types/themeTypes/ThemeType';
const ORANGE_THEME: ThemeTypes = {
    name: 'ORANGE_THEME',
    dark: false,
    variables: {
        'border-color': '#e5eaef',
        'border-opacity': 1,
    },
    colors: {
        primary: '#fb9678',
        secondary: '#03c9d7',
        info: '#539BFF',
        success: '#05b187',
        accent: '#FFAB91',
        warning: '#FFAE1F',
        error: '#f94d4d',
        lightprimary: '#fce6ed',
        lightsecondary: '#EDFBF7',
        lightsuccess: '#E6FFFA',
        lighterror: '#FDEDE8',
        lightwarning: '#FEF5E5',
        lightinfo:'#EBF3FE',
        textPrimary: '#11142d',
        textSecondary: '#777e89',
        borderColor: '#e5eaef',
        inputBorder: '#DFE5EF',
        containerBg: '#ffffff',
        background: '#f6f6f6',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        'on-surface-variant': '#fff',
        grey100: '#F2F6FA',
        grey200: '#EAEFF4'
    }
};


export { ORANGE_THEME};
