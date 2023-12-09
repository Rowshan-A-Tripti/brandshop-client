import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthPRovider';
import { Link, NavLink } from 'react-router-dom';

const NewNav = () => {

    const { allLogOut, user } = useContext(AuthContext)
    const logOut = () => {
        allLogOut()
            .then(() => {
                console.log('logOut done')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const navLists = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-800" : "white"
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/features"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-800" : ""
            }
        >
            Features
        </NavLink>

        <NavLink
            to="/Contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-800" : "white"
            }
        >
            Contact
        </NavLink>

        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-800" : ""
            }
        >
            Add Product
        </NavLink>

        <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-800" : ""
            }
        >
            My Cart
        </NavLink>

        
    </>

    return (
        <div>
            <div className='grid pl-20 lg:pl-0 lg:flex mt-4 p-4 lg:gap-14 lg:justify-between'>
                <div className='flex'>
                    <img className='h-[72px] w-[96px]' src="https://i.ibb.co/kgPmTGs/kisspng-car-computer-icons-logo-silhouette-5b3d4b6382e4a4-5707252715307436515362-1.png" />
                    <h1 className='mb-5 text-5xl font-bold text-black'><span className='bg-gradient-to-r from-black to-yellow-700 text-transparent bg-clip-text'>MiCar.</span></h1>
                </div>
                <div className='flex pt-4 gap-4 lg:gap-16 text-black font-semibold'>
                    {navLists}
                </div>
                <div className="ml-8 md:ml-0 lg:ml-0">
                    {
                        user && <div className="flex gap-3 items-center">
                            <img className='w-14 h-14 rounded-full ' src={user.photoURL} />
                            <p className='text-orange-900'>{user.displayName}</p>
                        </div>
                    }
                </div>
                <div className="ml-24 md:ml-0 lg:ml-0">
                    {
                        user ? <Link to={'/login'}>
                            <button onClick={logOut} className="bg-orange-400 rounded text-white px-3 py-2 mr-6 hover:bg-orange-600">Log Out</button>
                        </Link> : <Link to={'/login'}>
                            <button className="bg-orange-400 rounded text-white px-3 py-2 mr-6 hover:bg-sky-700">Log In</button>
                        </Link>
                    }

                </div>

            </div>
        </div>
    );
};

export default NewNav;