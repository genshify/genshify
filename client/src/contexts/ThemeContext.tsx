import { createContext, useContext, useState } from "react";
import {
  dendroTheme,
} from "genshin-optimizer/ui";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { Theme } from "@mui/material";

type ThemeContextType = {
    theme: Theme;
    changeTheme: (selectedTheme: Theme) => void;
  };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export const ThemeProviderComponent = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(dendroTheme);
    const changeTheme = (selectedTheme : Theme)=>{
        setTheme(selectedTheme)
    }
    const contextValue: ThemeContextType = {
        theme,
        changeTheme,
      };
    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useThemeContext must be used within a ThemeProviderComponent");
    }
    return context;
  };
