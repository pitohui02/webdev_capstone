import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./pages/Error/ErrorPage.tsx";
import LoginPage from "./pages/login/login.tsx";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Root />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/register",
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
