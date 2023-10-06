import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Blog from "../pages/Blog/Blog";

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Root;