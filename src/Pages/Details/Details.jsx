import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewNav from "../../Component/New/NewNav";
import { ToastContainer, toast } from "react-toastify";


const Details = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();
    const detailsData = useLoaderData()
    const myData = {
        name: details.name,
        photo: details.photo,
        price: details.price

    }
    useEffect(() => {
        const result = detailsData.find(detail => detail._id == id)
        setDetails(result);
    }, [detailsData, id])
    const addCartHandle = (id)=>{
   console.log(id)
   fetch('https://automotive-server-site-bice.vercel.app/selects', {
    method: 'POST', 
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(myData)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    if(data.insertedId){
        toast("successfully added")
    }
    
   })

    }
    return (
        <div>
            <NewNav></NewNav>
            <ToastContainer/>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={details.photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="p-3">
                        <h1 className="text-5xl text-sky-700 font-bold">{details.name}</h1>
                        <p className="text-2xl pt-2">Brand Name: {details.brandName}</p>
                        <p className="py-6">{details.description}</p>
                        <button onClick={addCartHandle} className="text-black font-semibold bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800 p-2 rounded-xl">Add To My Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;