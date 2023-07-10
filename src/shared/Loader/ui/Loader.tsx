import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
    className?: string
}

const Loader: React.FC<LoaderProps> = ({className}) => {
    return (
        <div className={classNames("lds-ring", {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;