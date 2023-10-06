import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import ServiceCard from "./ServiceCard";

const Home = () => {

    const services = useLoaderData();
    console.log(services);

    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>

            {/* service container */}
           <div className="grid grid-cols-3 gap-4 mx-auto space-y-4">
            {
                services.map(service => <ServiceCard
                      key={service.id}
                      services={service}
                ></ServiceCard>)
            }
           </div>

            

        </div>
    );
};

export default Home;