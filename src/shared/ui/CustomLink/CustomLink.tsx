import React, {ReactNode} from "react";
import {LinkProps, NavLink} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./CustomLink.module.scss";

export enum CustomLinkTheme {
    PRIMARY = "primary",
    SECPNDARY = "secondary",
}

interface CustomLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    to: string;
    theme?: CustomLinkTheme;
}

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
    const {children, className, to, theme = CustomLinkTheme.PRIMARY, ...otherProps} = props;

    return (
        <NavLink
            className={({isActive, isPending}) => {
                const isActiveLink = isPending ? "pending" : isActive ? "active" : "";
                return classNames(cls.links_item, {active: isActiveLink}, [cls[theme], className]);
            }}
            to={to}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
};