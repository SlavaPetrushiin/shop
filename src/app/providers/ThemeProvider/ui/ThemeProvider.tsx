import React, { FunctionComponent, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, TypesSchema } from "../lib/ThemeContext";

interface ThemeProviderProps {
	children?: React.ReactNode;
}

const defaultSchema = JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) as TypesSchema || TypesSchema.DEFAULT;

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<TypesSchema>(defaultSchema);

	const toggleSchema = () => {
		theme === TypesSchema.DEFAULT ? setTheme(TypesSchema.DARK) : setTheme(TypesSchema.DEFAULT);
	};

	const defaultProps = useMemo(() => ({
		theme, toggleSchema
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
				{children}
		</ThemeContext.Provider>
	)
}