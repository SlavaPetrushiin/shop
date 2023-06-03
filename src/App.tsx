import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { Suspense } from 'react';;
import Main from "./pages/Main/Main";
import AboutPageAsync from "./pages/About/AboutPage.async";
import ContactsPageAsync from "./pages/Contacts/ContactsPage.async";
import "./index.scss";

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
	return (
		<div className="wrapper">
			<Suspense fallback={<div>Loading...</div>}>
				<RouterProvider router={router} />
			</Suspense>
		</div>
	)
}