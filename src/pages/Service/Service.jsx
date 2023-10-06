import Navbar from '../Shared/Navbar/Navbar';

const Service = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>News details</h2>
        </div>
    );
};

export default Service;





// /* eslint-disable no-undef */
// /* eslint-disable react/no-unknown-property */
// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import ServiceDetails from "./ServiceDetails";

// const Service = () => {

//     const [eachService, setEachService] = useState({});


//     const { id } = useParams()

//     const services = useLoaderData()


//     useEffect(() => {

//         const findService = services?.find(service => service.id == id);

//         setEachService(findService)
//     }, [id, services])

//     console.log(eachService);


//     return (
//         <div>
//            <ServiceDetails service={eachService}></ServiceDetails>
//         </div>
//     );
// };

// export default Service;

