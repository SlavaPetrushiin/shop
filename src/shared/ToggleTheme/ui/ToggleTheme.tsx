import React from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { TypesSchema } from "app/providers/ThemeProvider/lib/ThemeContext";
import DarkIcon from "./../../assets/icons/dark-icon.svg";
import LightIcon from "./../../assets/icons/light-icon.svg";
import { Button } from "./../../Button";

interface ToggleThemeProps {}

const ToggleTheme: React.FC<ToggleThemeProps> = (props) => {
    const { theme, toggleSchema } = useTheme();

    return (
        <Button className="btn-toggle-theme" onClick={toggleSchema}>
            {theme === TypesSchema.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ToggleTheme;
