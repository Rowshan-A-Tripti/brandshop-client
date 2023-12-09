
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';

import MyCart from '../Pages/MyCart/MyCart';
import LogIn from '../Pages/LogIn/LogIn';
import SingUp from '../Pages/SignUp/SingUp';
import NewNav from '../Component/New/NewNav';
import PrivetRouter from './PrivateRouter/PrivateRouter';
import Toyota from '../Component/Toyota/Toyota';

import Ford from '../Component/Ford/Ford';
import Honda from '../Component/Honda/Honda';

import Mercedes from '../Component/Mercedes/Mercedes';
import Tesla from '../Component/Tesla/Tesla';
import Van from '../Component/Bmw/Van';
import Update from '../Pages/Update/Update';
import Details from '../Pages/Details/Details';
import Contact from '../Pages/Contact/Contact';
import Features from '../Pages/Features/Features';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brandCard.json')
            },
            {
                path:'/features',
                element: <Features></Features>
            },
            {
                path: '/new',
                element: <NewNav></NewNav>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/addProduct',
                element: <PrivetRouter><AddProduct></AddProduct></PrivetRouter>
            },
            {
                path: '/myCart',
                element: <PrivetRouter><MyCart></MyCart></PrivetRouter>,
                loader: () => fetch("https://automotive-server-site-bice.vercel.app/selects")
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <SingUp></SingUp>
            },
            {
                path: '/Bmw',
                element: <Van></Van>,
                loader: () => fetch('https://automotive-server-site-bice.vercel.app/car')
            },
            {
                path: '/ford',
                element: <Ford></Ford>,
                loader: () => fetch('https://automotive-server-site-bice.vercel.app/car')
            },
            {
                path: '/honda',
                element: <Honda></Honda>
            },
            {
                path: '/mercedes',
                element: <Mercedes></Mercedes>,
                loader: () => fetch('https://automotive-server-site-bice.vercel.app/car')
            },
            {
                path: '/toyota',
                element: <Toyota></Toyota>,
                loader: () => fetch('https://automotive-server-site-bice.vercel.app/car')
            },
            {
                path: '/tesla',
                element: <Tesla></Tesla>,
                loader: () => fetch('https://automotive-server-site-bice.vercel.app/car')
            },
            {
                path: '/update/:id',
                element: <PrivetRouter><Update></Update></PrivetRouter>,
                loader: ({ params }) => fetch(`https://automotive-server-site-bice.vercel.app/car/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivetRouter><Details></Details></PrivetRouter>,
                loader: () => fetch('https://automotive-server-site-bice.vercel.app/car')

            }
        ]
    }
])
export default Router;