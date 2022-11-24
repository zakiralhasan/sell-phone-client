import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    //used for react hook form
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();


    //create or Register new user
    const handleRegisterForm = (data) => {

        console.log(data)

    };

    return (
        <div className="mx-2">
            <div className="bg-white max-w-sm mx-auto p-8 my-6 rounded-md shadow-md ">
                <h1 className="text-2xl font-medium mb-2">Register Free!</h1>
                <form onSubmit={handleSubmit(handleRegisterForm)}>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Account type</span>
                            </label>
                            <select
                                {...register("select", { required: "Select is required" })}
                                className="select select-bordered w-full max-w-xs">
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                            {errors.name && (
                                <small className="text-red-500 text-left">
                                    {errors.name.message}
                                </small>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Your full name"
                                className="input input-bordered w-full "
                            />
                            {errors.name && (
                                <small className="text-red-500 text-left">
                                    {errors.name.message}
                                </small>
                            )}
                        </div>
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
                                {...register("password", {
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 characters long",
                                    },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                        message:
                                            "Password must have uppercase, number and special characters",
                                    },
                                })}
                                className="input input-bordered w-full "
                                required
                            />
                            {errors.password && (
                                <small className="text-red-500 text-left">
                                    {errors.password.message}
                                </small>
                            )}
                            <input
                                type="submit"
                                className="bg-[#F45510] mt-5 py-4 text-white w-full rounded-lg cursor-pointer"
                                value="Register"
                            />
                            <p className="text-xs text-gray-500 text-left mt-3">
                                Already have an account?
                                <Link to="/login" className="link link-hover">
                                    <span className="ml-2 text-gray-400 hover:text-black">
                                        Login to your account
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

export default Register;