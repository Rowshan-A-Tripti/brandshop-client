import { Link, useLoaderData } from "react-router-dom";
import NewNav from "../../Component/New/NewNav";
import { useState } from "react";
import Product from "./Product/Product";


const MyCart = () => {
    const detailsData = useLoaderData();
    const [products, setProducts] = useState(detailsData);
    return (
        <div className="p-4">
            <NewNav></NewNav>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
                {
                    products.map(product => <Product key={product._id} setProducts={setProducts} products={products} product={product}></Product>)
                }

            </div>
            <div className="flex justify-center">
                <Link to={`/`}><button className="text-black font-semibold bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800 p-2 rounded-xl">Go to Home</button></Link>
            </div>

        </div>
    );
};

export default MyCart;