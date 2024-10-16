import React, { createContext, useState, useEffect } from 'react';

export const ColorThemeContext = createContext();

export const ColorThemeProvider = ({ children }) => {
    const [colorTheme, setColorTheme] = useState(() => {
        const storedPrimaryColor = localStorage.getItem('primaryColor');
        const storedSecondaryColor = localStorage.getItem('secondaryColor');

        return (storedPrimaryColor && storedSecondaryColor) ? [storedPrimaryColor, storedSecondaryColor] : ["#242424", "#ffffffde"];
    });

    // Load backgroundBackgroundColor from localStorage when the app loads
    useEffect(() => {
        const storedPrimaryColor = localStorage.getItem('primaryColor');
        const storedSecondaryColor = localStorage.getItem('secondaryColor');

        if (storedPrimaryColor && storedSecondaryColor) setColorTheme([storedPrimaryColor, storedSecondaryColor]);
    }, []);

    // Update localStorage whenever the backgroundBackgroundColor changes
    useEffect(() => {
        localStorage.setItem('primaryColor', colorTheme[0]);
        // Update the CSS variable
        document.documentElement.style.setProperty('--primary-color', colorTheme[0]);

        localStorage.setItem('secondaryColor', colorTheme[1]);
        // Update the CSS variable
        document.documentElement.style.setProperty('--secondary-color', colorTheme[1]);
    }, [colorTheme]);

    return (
        <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
            {children}
        </ColorThemeContext.Provider>
    );
};
