import { Link } from "react-router-dom";


const EmptyPage = () => {
    return (
        <div className="">
            <div className="hero min-h-screen bg-black">
                <div className="hero "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"><span className="bg-gradient-to-r  from-sky-800 via-orange-200 to-sky-800 text-transparent bg-clip-text">Hello</span></h1>
                        <p className="mb-5">No shopping Cart is here...</p>
                        <Link><Link to={'/addProduct'}><button className="text-black font-semibold bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800 p-2 rounded-xl">Go To Add Product</button></Link></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EmptyPage;