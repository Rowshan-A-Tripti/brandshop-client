
import { useEffect, useState } from "react";
import NewNav from "../New/NewNav";
import { Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating";


const Mercedes = () => {
    const [trucks, setTrucks] = useState([]);
    const truckData = useLoaderData();
    useEffect(() => {

        const truckCar = truckData.filter(truck => truck.brandName == 'Mercedes')
        setTrucks(truckCar);
    }, [truckData])
    console.log(truckData)
    return (
        <div className="max-w-screen-xl mx-auto">
            <NewNav></NewNav>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/k0V7dmv/mercedec.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="grid justify-start">
                            <h1 className="text-white  font-bold text-2xl lg:text-5xl"> We are offering best<br /> <span className="text-3xl lg:text-7xl text-orange-400 italic">services.</span></h1>
                            <p className="text-xl font-semibold text-blue-700">come and enjoy your driving...</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/NL9rm40/pexels-mike-bird-205738.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="grid justify-start">
                            <h1 className="text-white  font-bold text-2xl lg:text-5xl"> We are offering best<br /> <span className="text-3xl lg:text-7xl text-orange-400 italic">services.</span></h1>
                            <p className="text-xl font-semibold text-blue-700">come and enjoy your driving...</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/YQddtwv/pexels-sof-a-nu-ez-18554102.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="grid justify-start">
                            <h1 className="text-white  font-bold text-2xl lg:text-5xl"> We are offering best<br /> <span className="text-3xl lg:text-7xl text-orange-400 italic">services.</span></h1>
                            <p className="text-xl font-semibold text-blue-700">come and enjoy your driving...</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <div className="my-10 grid md:grid-cols-2 gap-6">
                {
                    trucks.map(car => <div className="grid rounded-xl bg-gradient-to-r from-white via-orange-200 to-sky-600 md:grid-cols-2 " key={car._id}>
                        <div className="col-span-1">
                            <img className="" src={car.photo} />
                        </div>
                        <div className="pl-6">
                            <h5 className="text-4xl font-bold text-sky-800">{car.name}</h5>
                            <h6 className="text-2xl font-semibold text-black">{car.brandName}</h6>
                            <p className="text-xl font-semibold text-black">{car.category}</p>
                            <h2 className="text-2xl font-bold">{car.price}TK</h2>
                            <p className="text-lg font-semibold text-yellow-600"><Rating
                                emptySymbol={<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>}
                                fullSymbol={<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>}
                                initialRating={car.rating}
                                readonly
                            />
                            </p>
                            <div className="flex justify-around">
                                <Link to={`/details/${car._id}`}><button className="text-black font-semibold bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800 p-2 rounded-xl">details</button></Link>
                                <Link to={`/update/${car._id}`}>
                                    <button className="text-black font-semibold bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800 p-2 rounded-xl">update</button>
                                </Link>
                            </div>
                        </div>


                    </div>)
                }
            </div>



        </div>
    );
};

export default Mercedes;