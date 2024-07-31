import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./pages/Error/ErrorPage.tsx";
import LoginPage from "./pages/login/login.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUpPage from "./pages/register/register.tsx";
import { Toaster } from "./@/components/ui/toaster.tsx";

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
		element: <SignUpPage />,
		errorElement: <ErrorPage />,
	},
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<Toaster />
		</QueryClientProvider>
	</React.StrictMode>,
);
