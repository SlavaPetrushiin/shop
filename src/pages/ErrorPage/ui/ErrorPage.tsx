import React from "react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import cls from "./ErrorPage.module.scss";

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.error?.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = "Unknown error";
    }

    return (
        <div className="error-page">
            <h1>{errorMessage}</h1>
        </div>
    );
};

export default ErrorPage;