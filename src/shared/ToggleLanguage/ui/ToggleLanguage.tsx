import React from "react";
import { Button } from "shared/Button";
import { useTranslation } from "react-i18next";

interface ToggleLanguageProps {}

const ToggleLanguage: React.FC<ToggleLanguageProps> = (props) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return <Button onClick={toggleLanguage}>{t("Перевод")}</Button>;
};

export default ToggleLanguage;
