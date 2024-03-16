import { ReactNode, createContext, useContext, useState } from "react";
import {Theme, darkTheme, lightTheme} from "@theme/index"

type ThemeContextProps = {
    theme: Theme
    toggleTheme: () => void
}

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme(): ThemeContextProps {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export function ThemeProvider({children}: ThemeProviderProps) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    function toggleTheme() {
        setIsDarkMode((prevMode) => !prevMode)
    }

    const theme: Theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}