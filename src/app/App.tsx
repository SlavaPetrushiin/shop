import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root";
import { Suspense } from "react";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {ContactsPage} from "pages/ContactsPage";
import { ThemeProvider, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "../helpers/classNames/classNames";
import "app/styles/index.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
    const { theme, toggleSchema } = useTheme();

    return (
        <ThemeProvider>
            <div className={classNames("app", {}, [theme, "ss"])}>
                <button onClick={toggleSchema}>Change theme</button>
                <Suspense fallback={<div>Loading...</div>}>
                    <RouterProvider router={router} />
                </Suspense>
            </div>
        </ThemeProvider>
    );
};
