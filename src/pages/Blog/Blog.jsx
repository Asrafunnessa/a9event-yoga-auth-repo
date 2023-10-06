

const Blog = () => {
    return (
        
        // <div>
        //     <div className="card lg:card-side bg-gray-200 shadow-xl border border-gray-300">
        //         <figure><img className="" src="./slideshow1_img_2.png" alt="Album" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title text-right text-center">Yogi is my second
        //                 family where I’ve learned and then worked for a long time.
        //                 Becoming a yoga trainer here is the second best decision I
        //                 have made, the first one is to marry John, my beloved husband.
        //                 At Yogi, I find my self and the way to be close friend with her. Rose Anderson!</h2>



        //         </div>
        //     </div>
        // </div>
        <div>
    <div className="card lg:card-side bg-gray-200 shadow-xl border border-gray-300 w-full h-auto">
        <figure>
            <img
                className="w-full h-auto"
                src="./slideshow1_img_2.png"
                alt="Album"
            />
        </figure>
        <div className="card-body grid">
            <h2 className="card-title text-right text-center">
                Yogi is my second family where I’ve learned and then worked for
                a long time. Becoming a yoga trainer here is the second best
                decision I have made, the first one is to marry John, my
                beloved husband. At Yogi, I find my self and the way to be a
                close friend with her.
            </h2>
        </div>
    </div>
</div>


    );
};

export default Blog;