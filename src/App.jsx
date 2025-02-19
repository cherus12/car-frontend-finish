import {
	createBrowserRouter,
	Route,
	Router,
	RouterProvider,
	Routes,
} from 'react-router-dom'
import { Layout } from './components/Layout/Layout.jsx'
import { Home } from './page/Home/Home.jsx'
import { CarsList } from './page/CarsList/CarsList.jsx'
import { Car } from './page/Car/Car.jsx'
import { CarAdd } from './page/CarAdd/CarAdd.jsx'
import { Login } from './page/Login/Login.jsx'
import { Register } from './page/Register/Register.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import { Auth } from './page/Auth/Auth.jsx'
import { MyAds } from './page/MyAds/MyAds.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout></Layout>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/cars',
				element: <CarsList></CarsList>,
			},
			{
				path: '/cars/:id',
				element: <Car></Car>,
			},
			{
				path: '/cars/ad',
				element: <CarAdd></CarAdd>,
			},
			{ path: '/my', element: <MyAds></MyAds> },
		],
	},
	{
		path: '/login',
		element: <Login></Login>,
	},
	{ path: '/register', element: <Register></Register> },
])

function App() {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
