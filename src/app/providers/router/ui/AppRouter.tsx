import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {MainPage} from "pages/MainPage";
import {ContactsPage} from "pages/ContactsPage";
import {RootPage} from "pages/RootPage";
import {NotFoundPage} from "pages/NotFoundPage";
import "app/styles/index.scss";
import {AboutPage} from "pages/AboutPage";

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
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
};
