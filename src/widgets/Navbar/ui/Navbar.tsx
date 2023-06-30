import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { classNames } from "helpers/classNames/classNames";
import { FunctionComponent } from "react";
import { useTheme } from "app/providers/ThemeProvider";

interface INavbarProps {
    className?: string;
}

export const Navbar: FunctionComponent<INavbarProps> = (props) => {
    const { className } = props;
    const { theme, toggleSchema } = useTheme();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <nav className={cls.links}>
                <Link className={cls.links_item} to={`/`}>
                    Main
                </Link>
                <Link className={cls.links_item} to={`/about`}>
                    About
                </Link>
                <Link className={cls.links_item} to={`/contacts`}>
                    Contacts
                </Link>
            </nav>
            <button onClick={toggleSchema}>Change theme</button>
        </div>
    );
};
