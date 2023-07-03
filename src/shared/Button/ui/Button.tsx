import React from "react";
import cls from "./Button.module.scss";
import { classNames } from "helpers/classNames/classNames";

export enum ThemeButton {
    "CLEAR" = "clear",
}

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { className = "", children, theme = ThemeButton.CLEAR, ...otherProps } = props;
    return (
        <button className={classNames("btn", {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
