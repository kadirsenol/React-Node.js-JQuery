import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Error404 from './pages/Error404'
import Profile from './pages/Profile'

const router = createBrowserRouter([

    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/Register",
        element:<Register/>
    },
    {
        path:"/Profile",
        element:<Profile/>
    },
    {
        path:"*",
        element: <Error404/>
    }
])

export default router