
import { ToastContainer, toast } from 'react-toastify';
import NewNav from '../../Component/New/NewNav';

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const name = form.name.value;
        console.log(photo, brandName, price, rating, name);
        const carData = { photo, brandName, category, price, rating, description, name }
        console.log(carData);

        fetch('https://automotive-server-site-bice.vercel.app/car', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Product SuccessFully Added');
                    form.reset();
                }
            })
    }
    return (
        <div>
            <NewNav></NewNav>
            <ToastContainer />
            <div className="hero min-h-screen bg-white">
                <div className="hero-content grid flex-col lg:flex-row-reverse">
                <h1 className='text-center bg-gradient-to-r  from-sky-950 via-orange-300 to-sky-950 text-transparent bg-clip-text text-3xl lg:text-5xl font-bold py-3'>Add Product</h1>

                    <div className="card flex-shrink-0 w-[600px]  bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="image" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <div className="input-group">

                                    <select name="category" className=" w-full rounded select select-bordered">
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
                                <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                            </div>
                            <div>
                                <textarea placeholder="description" className='w-full border-2' name="description" id="" cols="30" rows="7"></textarea>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="text-black font-semibold bg-gradient-to-r from-sky-900 via-orange-300 to-sky-900 p-2 w-full rounded-xl">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;