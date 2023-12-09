import { Link } from "react-router-dom";


const BrandCart = ({ brandApi }) => {


    return (
        <div>
          
                <div className="bg-black">
                    <h1 className=" text-4xl font-bold text-center pt-16 lg:text-6xl "><span className="bg-gradient-to-r from-sky-600 via-yellow-300 to-orange-400 text-transparent bg-clip-text">Brands</span></h1>
                
                    <div className=" grid lg:grid-cols-3 py-10 px-20">
                    
                        {
                            brandApi?.map(brand =>
                                <div key={brand.id} className="grid items-center">
                                    <Link to={`/${brand.brand_name}`}><div className="flex justify-center pt-4">
                                        <img className="h-40 w-60" src={brand.brand_img} />
                                    </div>
                                        <h1 className="text-3xl text-white text-center font-semibold">{brand.brand_name}</h1></Link>
                                </div>)
                        }
                    </div>
                </div>
            
        </div>

    );
};

export default BrandCart;