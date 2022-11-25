import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState()
    //used for react hook form
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    //used auth context
    const { user, createUser, updateUserProfile, loginUserWithGoogle } = useContext(AuthContext)


    //create or Register new user
    const handleRegisterForm = (data) => {
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image)

        //uploade image to image server
        const url = `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_HOST_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // create new user
                    createUser(data.email, data.password)
                        .then(result => {
                            const newUser = result.user;
                            const userInfo = {
                                name: data.name,
                                email: newUser.email,
                                role: data.select
                            }
                            //update user info
                            updateUserInfoWithPicture(data.name, imgData.data.display_url, userInfo)
                        })
                        .catch(error => console.error(error))
                }
            }).catch(error => console.log(error))
        reset();
    };

    //update user profile with name and picture
    const updateUserInfoWithPicture = (name, imgURL, userInfo) => {
        updateUserProfile({ displayName: name, photoURL: imgURL })
            .then(() => {
                // save user info to the database
                storUserInfoToDatabase(userInfo)
            })
            .catch((error) => {
                const errorMsg = error.message;
                setErrorMessage(errorMsg);
            });
    };

    //user login with google account
    const loginWithGoogle = () => {
        loginUserWithGoogle()
            .then((result) => {
                const loginUser = result.user;
                setErrorMessage("");
                const userInfo = {
                    name: loginUser.displayName,
                    email: loginUser.email,
                    role: 'Buyer'
                }
                // save user info to the database
                storUserInfoToDatabase(userInfo)
            })
            .catch((error) => {
                const errorMsg = error.message;
                setErrorMessage(errorMsg);
            })
    };

    //store user's information to the database
    const storUserInfoToDatabase = (userInfo) => {
        fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.result.acknowledged) {
                    toast.success('Your account has been created successfully!')
                    localStorage.setItem('accessToken', data.token)//stored access token at the local storage
                }
            })
    }

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
                        <div className="form-control mt-6">
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered w-full "
                                required
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <small className="text-red-500 text-left">
                                    {errors.name.message}
                                </small>
                            )}
                        </div>
                        <div className="form-control mt-6 border rounded-lg ">
                            <label className="label">
                                <span className="label-text">Select your image</span>
                            </label>
                            <input
                                type="file"
                                {...register("img", { required: "image is required" })}
                                // placeholder="Your full name"
                                className="p-2 border-none outline-none"
                                required
                            />
                            {errors.name && (
                                <small className="text-red-500 text-left">
                                    {errors.img.message}
                                </small>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <input
                                type="email"
                                {...register("email")}
                                className="input input-bordered w-full "
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-control mt-6">
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
                                placeholder="Enter your password"
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
                        onClick={loginWithGoogle}
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