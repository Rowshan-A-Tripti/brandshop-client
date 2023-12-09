

import { useLoaderData } from 'react-router-dom';
import NewNav from '../../Component/New/NewNav';
import { ToastContainer, toast } from 'react-toastify';

const Update = () => {

    const  loadedData = useLoaderData();
    console.log(loadedData);
    const {_id, photo, brandName,category, price, rating, name} = loadedData;
     
    const handleUpdate = e =>{
        e.preventDefault()

        const form = e.target;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const name = form.name.value;
        const carData = { photo, brandName,category, price, rating, name }

        console.log(carData);

        fetch(`https://automotive-server-site-bice.vercel.app//car${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0 ){
                toast.success('Product SuccessFully Updated');
            }
        })
    }

    return (
        <div>
            <NewNav></NewNav>
            <ToastContainer />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid flex-col lg:flex-row-reverse">
                    <h1 className='text-center bg-gradient-to-r  from-sky-950 via-orange-300 to-sky-950 text-transparent bg-clip-text text-3xl lg:text-5xl font-bold py-3'>Update Product</h1>

                    <div className="card flex-shrink-0 w-[600px]  bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="image" defaultValue={photo} name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" defaultValue={name} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand Name" defaultValue={brandName} name="brandName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <div className="input-group">

                                    <select defaultValue={category} name="category" className=" w-full rounded select select-bordered">
                                        <option disabled >Pick Category</option>
                                        <option>car</option>
                                        <option>truck</option>
                                        <option>van</option>
                                        <option>sports car</option>
                                        <option>Tesla</option>
                                        <option>bike</option>
                                    </select>

                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="price" defaultValue={price} name="price" className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="rating" defaultValue={rating} name="rating" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="text-black font-semibold bg-gradient-to-r from-sky-900 via-orange-300 to-sky-900 p-2 w-full rounded-xl">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;