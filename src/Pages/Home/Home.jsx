import { useLoaderData } from "react-router-dom";

import SecondBanner from "../../Component/Banner/SecondBanner";
import NavBar from "../../Component/Navbar/NavBar";
import BrandCart from "./BrandCart/BrandCart";
import ThirdBanner from "../../Component/Banner/ThirdBanner";




const Home = () => {
    const brandApi = useLoaderData();

    return (
        <div >
            <NavBar></NavBar>
            
            <BrandCart brandApi={brandApi}></BrandCart>
            <SecondBanner></SecondBanner>
            <ThirdBanner></ThirdBanner>
            
            
            
            
        </div>
    );
};

export default Home;