import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    //used for react hook form
    const { register, handleSubmit, reset } = useForm();


    //login user
    const handleLoginForm = (data) => {

        console.log(data)

    };

    return (
        <div className="mx-2">
            <div className="bg-white max-w-sm mx-auto p-8 my-6 rounded-md shadow-md ">
                <h1 className="text-2xl font-medium mb-2">Login</h1>
                <form onSubmit={handleSubmit(handleLoginForm)}>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                className="input input-bordered w-full "
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password")}
                                className="input input-bordered w-full "
                                required
                            />
                            <label className="label">
                                <Link to="/reset" className="text-gray-400 label-text-alt link link-hover">
                                    Forgot password?
                                </Link>
                            </label>
                            <input
                                type="submit"
                                className="bg-[#F45510] mt-5 py-4 text-white w-full rounded-lg cursor-pointer"
                                value="Login"
                            />
                            <p className="text-xs text-gray-500 text-left mt-3">
                                Don't have an account?
                                <Link to="/register" className="link link-hover">
                                    <span className="ml-2 text-gray-400 hover:text-black">
                                        Create your account
                                    </span>
                                </Link>
                            </p>
                            <div className="divider">OR</div>
                        </div>
                    </div>
                </form>
                <div>
                    <button
                        className="flex justify-center items-center gap-6 border border-[#F45510] text-[#F45510] py-4 w-full rounded-lg"
                    >
                        <FcGoogle className="text-2xl" />
                        <p>CONTINUE WITH GOOGLE</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;