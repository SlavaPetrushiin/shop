import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import React, { Suspense } from 'react';;
import Main from "./pages/Main/Main";
import AboutPageAsync from "./pages/About/AboutPage.async";
import ContactsPageAsync from "./pages/Contacts/ContactsPage.async";
import { ThemeProvider } from "./providers/thema/ThemaProvider";
import "./styles/index.scss";
import { useTheme } from "./providers/thema/ThemeContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: "about",
				element: <AboutPageAsync />,
			},
			{
				path: "contacts",
				element: <ContactsPageAsync />,
			},
		]
	},
]);

export const App = () => {
	const {theme, toggleSchema} =  useTheme();

	return (
		<ThemeProvider>
			<div className={"app " + theme}>
				<button onClick={toggleSchema}>Change theme</button>
				<Suspense fallback={<div>Loading...</div>}>
					<RouterProvider router={router} />
				</Suspense>
			</div>
		</ThemeProvider>

	)
}