import React from "react";
import cls from "./Button.module.scss";
import {classNames} from "shared/lib/classNames/classNames";

export enum ThemeButton {
    "CLEAR" = "clear",
}

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {className = "", children, theme = ThemeButton.CLEAR, ...otherProps} = props;
    return (
        <button data-testid="custom-button" className={classNames("btn", {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};

