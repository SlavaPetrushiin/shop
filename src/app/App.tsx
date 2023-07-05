import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { ContactsPage } from "pages/ContactsPage";
import { RootPage } from "pages/RootPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "../helpers/classNames/classNames";


import "app/styles/index.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contacts",
                element: <ContactsPage />,
            },
        ],
    },
]);

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
};
