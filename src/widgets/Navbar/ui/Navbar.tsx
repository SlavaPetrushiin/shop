import {classNames} from "shared/lib/classNames/classNames";
import {FunctionComponent} from "react";
import {CustomLink} from "shared/ui/CustomLink/CustomLink";
import {ToggleTheme} from "shared/ui/ToggleTheme/ToggleTheme";
import {useTranslation} from "react-i18next";
import {ToggleLanguage} from "shared/ui/ToggleLanguage/ToggleLanguage";
import cls from "./Navbar.module.scss";

interface INavbarProps {
    className?: string;
}

export const Navbar: FunctionComponent<INavbarProps> = (props) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <nav className={cls.links}>
                <CustomLink className={cls.links_item} to={"/"}>
                    {t("Главная")}
                </CustomLink>
                <CustomLink className={cls.links_item} to={"/about"}>
                    {t("О нас")}
                </CustomLink>
                <CustomLink className={cls.links_item} to={"/contacts"}>
                    {t("Контакты")}
                </CustomLink>
            </nav>
            <ToggleLanguage />
            <ToggleTheme />
        </div>
    );
};
