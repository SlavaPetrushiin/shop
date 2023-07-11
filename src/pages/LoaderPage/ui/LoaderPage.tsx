import React from "react";
import {Loader} from "shared/ui/Loader/Loader";
import cls from "./LoaderPage.module.scss";
import {classNames} from "shared/lib/classNames/classNames";

interface LoaderPageProps {
    className?: string;
}

const LoaderPage: React.FC<LoaderPageProps> = ({className}) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])} >
            <Loader />
        </div>
    );
};

export default LoaderPage;