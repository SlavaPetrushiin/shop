import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import cls from "./NotFoundPage.module.scss";


const NotFoundPage: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className={cls["not-found-page"]}>
            <h1>{t("Такой страницы не соществует")}</h1>
            <Link to="/">{t("Вернуться на домашнюю страницу")}</Link>
        </div>
    );
};

export default NotFoundPage;