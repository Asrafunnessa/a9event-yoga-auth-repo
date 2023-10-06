
import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import ServiceCard from "./ServiceCard";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {

    const services = useLoaderData();
    console.log(services);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="mx-auto" data-aos="zoom-in" data-aos-duration="3000">
            <Navbar></Navbar>
            <Banner></Banner>

            {/* service container */}
           <div className="grid grid-cols-3 gap-4 mx-auto space-y-4">
            {
                services?.map(service => <ServiceCard
                      key={service.id}
                      services={service}
                ></ServiceCard>)
            }
           </div>

            

        </div>
    );
};

export default Home;