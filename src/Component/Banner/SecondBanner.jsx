

const SecondBanner = () => {
    return (
        <div className="bg-black grid  lg:flex">
            <div className="lg:px-10 lg:py-40 lg:w-1/2 text-center" data-aos="zoom-in" data-aos-duration="2000">
                <h1 className="text-xl text-center lg:p-8 lg:text-2xl text-white italic">--Car Buying Platform--</h1>
                <p className=" text-4xl text-center lg:text-6xl italic bg-gradient-to-r from-sky-600 via-yellow-300 to-orange-400 text-transparent bg-clip-text">FIND YOUR <br/> NEXT DREAM VEHICLE</p>
            </div>
            <img className="lg:w-1/2" src="https://i.ibb.co/BctDg8H/6867608-28803.jpg"/>
        </div>
    );
};

export default SecondBanner;