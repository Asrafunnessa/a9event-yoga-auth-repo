/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import { Link } from "react-router-dom";
// import { AiOutlineDollar } from "react-icons/ai";

import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
    const { name, image, price, id, description} = services;
    return (
        <div className="flex justify-center items-center h-[80vh]">
        <div className="relative flex w-96 h-22 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
            <div className="relative mx-4 -mt-6  h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                    src={image}
                    alt="img-blur-shadow" className="w-full h-full object-cover" layout="fill"
                />
            </div>
            <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h5>
                <p>
                {
                        description.length > 63 
                        ? <p>{description.slice(0,63)} 
                        <Link
                         to={`/services/${id}`}
                         className="text-purple-600" > .....</Link></p>
                        : <p>{description}</p>
                       
                    }
                </p>
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                   ${price}
                </h5>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                >
                    View Details
                </button>
            </div>
        </div>
    </div>

//     <Link to={`/categories/${id}`}>
//     <div>
//         <div className="relative flex w-70 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-all hover:scale-105 
//   focus:scale-105 focus:opacity-[0.85]
//    active:scale-100 active:opacity-[0.85]
//     disabled:pointer-events-none disabled:opacity-50
//      disabled:shadow-none">
//             <div className="relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
//                 <img
//                     src={image}
//                     className="h-full w-full object-cover"
//                 />
//             </div>
//             <div className="p-6">
//                 <div className="mb-2 flex items-center justify-between">
//                     <button className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
//                         Learn More
//                     </button>
//                 </div>
//                 <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
//                     {name}
//                 </p>
//             </div>
//         </div>
//     </div>
// </Link>
       
    );
};

export default ServiceCard;