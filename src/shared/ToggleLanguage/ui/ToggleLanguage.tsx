import React from "react";
import cls from "./ToggleLanguage.module.scss";
import { Button } from "shared/Button";
import i18n from "shared/config/i18n/i18n";

interface ToggleLanguageProps {}

const ToggleLanguage: React.FC<ToggleLanguageProps> = (props) => {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return <Button>l</Button>;
};

export default ToggleLanguage;
