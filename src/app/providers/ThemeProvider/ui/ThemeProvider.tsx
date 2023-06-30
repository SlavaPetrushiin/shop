import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, TypesSchema } from "../lib/ThemeContext";

interface ThemeProviderProps {
    children?: React.ReactNode;
}

const defaultSchema = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TypesSchema) || TypesSchema.LIGHT;

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<TypesSchema>(defaultSchema);

    const toggleSchema = () => {
        let newTheme = theme === TypesSchema.LIGHT ? TypesSchema.DARK : TypesSchema.LIGHT;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    };

    const defaultProps = useMemo(
        () => ({
            theme,
            toggleSchema,
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
