import { useContext } from "react";
import {
	useRoutes,
	Navigate
} from "react-router-dom";
import { UserContext } from "./context/User/UserContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// layouts
import DashboardLayout from './layouts/Dashboard';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import NotFound from './pages/Page404';

import UserState from "./context/User/UserState";


const App = () => {

	const { selectedUser } = useContext(UserContext)
	console.log('selectedUser', selectedUser)
	// ----------------------------------------------------------------------
	let routes = useRoutes([
		{
			path: '/dashboard',
			element: selectedUser ? <DashboardLayout /> : <Navigate to="/login" replace />,
			children: [
				{ path: '/', element: <Navigate to="/dashboard/app" replace /> },
				// { path: 'app', element: <DashboardApp /> },
			]
		},
		{
			path: '/',
			children: [
				{ path: 'login', element: <Login /> },
				{ path: 'register', element: <Register /> },
				// { path: '404', element: <NotFound /> },
				{ path: '/', element: <Navigate to="/dashboard" /> },
				// { path: '*', element: <Navigate to="/404" /> }
			]
		},

		// { path: '*', element: <Navigate to="/404" replace /> }
	]);
	return routes;
};

const Router = () => {
	return (
		<UserState>
			<ToastContainer />
			<App />
		</UserState>
	);
};

export default Router;
