import React, { useContext } from "react";

export enum TypesSchema {
    DEFAULT = "light",
    DARK = "dark",
}

export type Theme = {
    theme?: TypesSchema;
    toggleSchema?: () => void;
};

export const ThemeContext = React.createContext<Theme>({});

export const useTheme = () => useContext(ThemeContext);
export const LOCAL_STORAGE_THEME_KEY = "theme";
