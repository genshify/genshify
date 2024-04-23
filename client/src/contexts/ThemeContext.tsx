import { createContext, useContext, useState } from "react";
import { dendroTheme } from "genshin-optimizer/ui";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { Theme } from "@mui/material";

type ThemeContextType = {
  theme: Theme;
  changeTheme: (selectedTheme: Theme,index:number) => void;
  swiperIndex:number;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProviderComponent = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState(dendroTheme);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const changeTheme = (selectedTheme: Theme,index:number) => {
    setTheme(selectedTheme);
    setSwiperIndex(index);
  };
  const contextValue: ThemeContextType = {
    theme,
    changeTheme,
    swiperIndex,
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
    throw new Error(
      "useThemeContext must be used within a ThemeProviderComponent"
    );
  }
  return context;
};
