import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Root from "./pages/root/Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/login", element: <Login /> },
			{ path: "/register", element: <Register /> },
			{ path: "/settings", element: <Settings /> },
			{ path: "/write", element: <Write /> },
			{ path: "/post/:postId", element: <Single /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
