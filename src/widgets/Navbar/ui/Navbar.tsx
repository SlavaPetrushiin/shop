import { classNames } from "helpers/classNames/classNames";
import { FunctionComponent } from "react";
import { CustomLink } from "shared/CustomLink";
import { ToggleTheme } from "shared/ToggleTheme";
import { useTranslation, initReactI18next } from "react-i18next";
import cls from "./Navbar.module.scss";

interface INavbarProps {
    className?: string;
}

export const Navbar: FunctionComponent<INavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <nav className={cls.links}>
                <CustomLink className={cls.links_item} to={`/`}>
                    {t("Главная")}
                </CustomLink>
                <CustomLink className={cls.links_item} to={`/about`}>
                    {t("О нас")}
                </CustomLink>
                <CustomLink className={cls.links_item} to={`/contacts`}>
                    {t("Контакты")}
                </CustomLink>
            </nav>
            <ToggleTheme />
        </div>
    );
};
