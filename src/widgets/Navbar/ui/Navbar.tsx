import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { classNames } from "helpers/classNames/classNames";
import { FunctionComponent } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { CustomLink } from "shared/CustomLink";
import { ToggleTheme } from "shared/ToggleTheme";

interface INavbarProps {
    className?: string;
}

export const Navbar: FunctionComponent<INavbarProps> = (props) => {
    const { className } = props;
    const { theme, toggleSchema } = useTheme();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <nav className={cls.links}>
                <CustomLink className={cls.links_item} to={`/`}>
                    Main
                </CustomLink>
                <CustomLink className={cls.links_item} to={`/about`}>
                    About
                </CustomLink>
                <CustomLink className={cls.links_item} to={`/contacts`}>
                    Contacts
                </CustomLink>
            </nav>
            <ToggleTheme />
        </div>
    );
};
