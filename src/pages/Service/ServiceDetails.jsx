
const ServiceDetails = () => {
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;


// /* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */


// import Navbar from '../Shared/Navbar/Navbar';

// const ServiceDetails = ({service}) => {

//     const { image, title, description, price} = service;


//     return (
//         <div>
//             <Navbar></Navbar>
//             <div className="flex justify-center items-center h-[80vh]">
//             <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
//                 <div className="relative mx-4 -mt-6  h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
//                     <img
//                         src={image}
//                         alt="img-blur-shadow" className="w-full h-full object-cover" layout="fill"
//                     />
//                 </div>
//                 <div className="p-6">
              
//                     <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                         {title}
//                     </h5>
//                     <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                        ${price}
//                     </h5>
//                     <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//                         {description}
//                     </p>
//                 </div>
//                 <div className="p-6 pt-0">
//                     <button
//                         className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                         type="button"
//                         data-ripple-light="true"
//                     >
//                         View Details
//                     </button>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default ServiceDetails;