import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 className="text-2xl">home</h2>
        </div>
    );
};

export default Home;