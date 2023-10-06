/* eslint-disable no-undef */

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const { createNewUser} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        const name = form.get("name");
        console.log(email, password, name, photo);

        // create user
        createUser(email, password)

            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

            createNewUser(email, password)
            .then (() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                .then(() => {})
                .catch((error) => {
                    console.log(error);
                });
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
                
            })


    }


return (
    <div data-aos="fade-left" data-aos-duration="3000">
        <Navbar></Navbar>
        <div>
            <img className="hero h-[70vh]" src="banner1.jpg" alt="" />
            <h2 className="text-5xl font-bold my-10 text-center">Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
    </div>
 );
};

export default Register;