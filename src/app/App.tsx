import {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ContactsPage} from "pages/ContactsPage";
import {RootPage} from "pages/RootPage";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";


import "app/styles/index.scss";
import {AppRouter} from "./providers/router/ui/AppRouter";



export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <AppRouter />
        </div>
    );
};
