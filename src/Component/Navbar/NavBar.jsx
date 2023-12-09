
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthPRovider';
import { useContext, useEffect, useState } from 'react';

const NavBar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
    );

    const handletoggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);



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
                isPending ? "pending" : isActive ? "text-black" : ""
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/features"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black" : ""
            }
        >
            Features
        </NavLink>

        <NavLink
            to="/Contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black" : ""
            }
        >
            Contact
        </NavLink>

        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black" : ""
            }
        >
            Add Product
        </NavLink>

        <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black" : ""
            }
        >
            My Cart
        </NavLink>

    </>
    return (
        <div className="w-auto lg:min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xhK9VR4/32300.jpg)' }}>
            <div className='grid lg:gap-28 max-w-screen-xl mx-auto'>
                <div className='grid pl-20 lg:pl-0 lg:flex mt-4 p-4 lg:gap-14 lg:justify-between'>
                    <div className='flex'>
                        <img className='h-[72px] w-[96px]' src="https://i.ibb.co/kgPmTGs/kisspng-car-computer-icons-logo-silhouette-5b3d4b6382e4a4-5707252715307436515362-1.png" />
                        <h1 className='mb-5 text-5xl font-bold text-black'><span className='bg-gradient-to-r from-black to-yellow-700 text-transparent bg-clip-text'>MiCar.</span></h1>
                    </div>
                    <div className='flex pt-4 gap-4 lg:gap-16 text-white font-semibold'>
                        {navLists}
                    </div>
                    <div className="ml-8 md:ml-0 lg:ml-0">
                        {
                            user && <div className="flex gap-3 items-center">
                                <img className='w-14 h-14 rounded-full ' src={user.photoURL} />
                                <p className='text-orange-200'>{user.displayName}</p>
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
                <div>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input onChange={handletoggle} type="checkbox" />

                        {/* sun icon */}
                        <svg
                            className="swap-on fill-current w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off fill-current w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
                <div>
                    <h1 className='text-4xl bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800 text-transparent bg-clip-text pl-16 lg:text-5xl font-bold italic' data-aos="zoom-in" data-aos-duration="2000"><span className='bg-gradient-to-r  from-sky-800 via-white to-sky-800 text-transparent bg-clip-text '>The Road Awaits Your Adventure</span></h1>
                    <p className='text-3xl text-white pl-20 pt-10 italic font-semibold'>Your Journey, Your Car</p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;