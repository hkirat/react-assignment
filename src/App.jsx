import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import Navbar from './component/Navbar'
import Login from './component/Login'
import Register from './component/Register'
import Home from './pages/Home'
import Root from './pages/Root'
import Problems from './pages/Problems'
import Problem from './pages/Problem'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'problemset/all', element: <Problems /> },
      { path: 'problemset/:id', element: <Problem /> }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
