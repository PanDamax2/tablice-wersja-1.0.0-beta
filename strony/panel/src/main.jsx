import './styles/theme.scss'
import './styles/globals.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//page
import { Layout } from './components/Layout/Layout.jsx'
import { LayoutUsers } from './components/LayoutUsers/LayoutUsers.jsx'
import { Loading } from './components/Loading/Loading.jsx'
import { LoginPage } from './views/LoginPage/LoginPage.jsx'
import { HeaderPage } from './views/HeaderPage/HeaderPage.jsx'
import { ReplacementsPage } from './views/ReplacementsPage/ReplacementsPage.jsx'
import { SliderPage } from './views/SliderPage/SliderPage.jsx'
import { InformationsPage } from './views/InformationsPage/InformationsPage.jsx'
import { ClassroomPage } from './views/ClassroomPage/ClassroomPage.jsx'
import { UsersPage } from './views/UsersPage/UsersPage.jsx'
import { NotFound } from './views/NotFound/NotFound.jsx'
import { AddUserPage } from './views/AddUserPage/AddUserPage.jsx'
import { SingleUserPage } from './views/SingleUserPage/SingleUserPage.jsx'

//actions
import { loader } from './api/loader.js'
import { loaderDataAndHideSections } from './api/loadDataAndHideSections.js'
import { actionsReplacement } from './components/FormRows/FormRows.jsx'
import { actionsHeader } from './components/HeaderForm/HeaderForm.jsx'
import { Error } from './components/Error/Error.jsx'
import { actionsSlider } from './components/SliderForm/SliderForm.jsx'
import { actionsInformations } from './components/InformationsForm/InformationsForm.jsx'
import { actionsClassroom } from './components/ClassroomForm/ClassroomForm.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/panel',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: '',
				element: <p>home</p>,
			},
			{
				path: '/panel/naglowek',
				element: <HeaderPage />,
				action: actionsHeader,
				loader: () => loader('headers'),
			},
			{
				path: '/panel/zastepstwa',
				element: <ReplacementsPage />,
				action: actionsReplacement,
				loader: () => loaderDataAndHideSections('replacements'),
			},
			{
				path: '/panel/slider',
				element: <SliderPage />,
				action: actionsSlider,
				loader: () => loaderDataAndHideSections('sliders'),
			},
			{
				path: '/panel/ogloszenia',
				element: <InformationsPage />,
				action: actionsInformations,
				loader: () => loaderDataAndHideSections('informations'),
			},
			{
				path: '/panel/sale',
				element: <ClassroomPage />,
				action: actionsClassroom,
				loader: () => loaderDataAndHideSections('classrooms'),
			},
			{
				path: '/panel/uzytkownicy',
				element: <LayoutUsers />,
				children: [
					{
						path: '',
						element: <UsersPage />,
						loader: () => loader('users'),
					},
					{
						path: '/panel/uzytkownicy/:userId',
						element: <SingleUserPage />,
						loader: ({ params }) => loader(`users/${params.userId}`),
					},
					{
						path: '/panel/uzytkownicy/dodaj',
						element: <AddUserPage />,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider
			router={router}
			fallbackElement={<Loading />}></RouterProvider>
	</React.StrictMode>
)
