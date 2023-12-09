

const Product = ({ setProducts, products, product }) => {
    console.log(product)
    const { _id, photo, name, price } = product || {}
    const deleteHandle = id => {
        console.log(id)
        fetch(`https://automotive-server-site-bice.vercel.app/selects/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const filteredData = products.filter((product) => product._id !== _id)
                setProducts(filteredData)
            })
    }
    return (
        <div className="p-6">
            <div className="rounded-2xl bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800">
                <div>
                    <img src={photo} alt="" />
                </div>
                <div className="p-4 text-center">
                    <h3 className="text-3xl text-black font-semibold">{name}</h3>
                    <p className="text-2xl text-black font-semibold">{price}TK</p>
                    <button onClick={() => deleteHandle(_id)} className="text-black font-semibold bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800 p-2 rounded-xl">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Product;