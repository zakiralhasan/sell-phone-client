import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";

const Reset = () => {
    const [errorMessage, setErrorMessage] = useState()
    //used for react hook form
    const { register, handleSubmit, reset } = useForm();
    //used auth context
    const { user, resetUserPassword } = useContext(AuthContext)

    const handleResetForm = (data) => {

        resetUserPassword(data.email)
            .then(() => {
                setErrorMessage("");
                reset();
                toast.success("Please check your inbox or spam box!");
            })
            .catch((error) => {
                setErrorMessage(error.message);
                reset();
            });
    };

    return (
        <div className="mx-2">
            <div className="bg-white max-w-sm mx-auto p-8 my-6 rounded-md shadow-md ">
                <h1 className="text-2xl font-medium mb-2">Reset Password</h1>
                <form onSubmit={handleSubmit(handleResetForm)}>
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
                            <input
                                type="submit"
                                className="bg-[#F45510] mt-5 py-4 text-white w-full rounded-lg cursor-pointer"
                                value="Reset"
                            />
                            <p className="text-xs text-gray-500 text-left mt-3">
                                Don't have an account?
                                <Link to="/register" className="link link-hover">
                                    <span className="ml-2 text-gray-400 hover:text-black">
                                        Create your account
                                    </span>
                                </Link>
                            </p>
                            <p className="text-xs text-gray-500 text-left mt-3">
                                Already have an account?
                                <Link to="/register" className="link link-hover">
                                    <span className="ml-2 text-gray-400 hover:text-black">
                                        Login to your account
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reset;