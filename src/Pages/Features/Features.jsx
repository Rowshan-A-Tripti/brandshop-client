
import NewNav from '../../Component/New/NewNav';

const Features = () => {
    return (
        <div>
            <NewNav></NewNav>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/7Gjxfrf/5087032-2686006.jpg)' }}>
                <div className="max-w-6xl mx-auto lg:py-40">
                    <h1 className="mb-5 text-center text-white pt-4 text-2xl lg:text-3xl font-bold">We are providing features</h1>
                    <div className='grid gap-5 py-4 lg:grid-cols-3'>
                        <div className="card w-96 glass">
                            <p className='p-2 text-white'>Advanced Driver Assistance Systems (ADAS): Modern cars come equipped with an array of safety features, such as adaptive cruise control, lane-keeping assist, automatic emergency braking, and blind-spot monitoring. These ADAS technologies enhance driver safety and assist in accident prevention.</p>
                        </div>
                        <div className="card w-96 glass">
                            <p className='p-2 text-white'>Infotainment Systems: Most modern cars have sophisticated infotainment systems that offer touch-screen interfaces, smartphone integration (e.g., Apple CarPlay and Android Auto), voice recognition, navigation, and connectivity options for a more enjoyable and connected driving experience.</p>
                        </div>
                        <div className="card w-96 glass">
                            <p className='p-2 text-white'>Fuel Efficiency and Alternative Powertrains: Modern cars are designed with improved fuel efficiency, thanks to innovations like hybrid, plug-in hybrid, and electric powertrains. These vehicles aim to reduce emissions and decrease the overall environmental impact of driving.</p>
                        </div>
                        <div className="card w-96 glass">
                            <p className='p-2 text-white'>Connectivity and Telematics: Many modern cars feature advanced connectivity options, allowing drivers to remotely control and monitor their vehicles via smartphone apps. This includes features like remote start, vehicle tracking, and over-the-air software updates.</p>
                        </div>
                        <div className="card w-96 glass">
                            <p className='p-2 text-white'>Autonomous and Semi-Autonomous Driving: Some modern cars are equipped with autonomous driving features like adaptive cruise control, lane-centering technology, and self-parking capabilities. These features represent steps towards fully autonomous vehicles, with the goal of reducing driver workload and improving road safety.</p>
                        </div>
                        <div className="card w-96 glass">
                            <p className='p-2 text-white'>Advanced Driver Assistance Systems (ADAS): Modern cars come equipped with an array of safety features, such as adaptive cruise control, lane-keeping assist, automatic emergency braking, and blind-spot monitoring. These ADAS technologies enhance driver safety and assist in accident prevention.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Features;