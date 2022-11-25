import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const [errorMessage, setErrorMessage] = useState()
    //used for react hook form
    const { register, handleSubmit, reset } = useForm();
    //used auth context
    const { user, loginUser, loginUserWithGoogle } = useContext(AuthContext)

    //used for login user redirect path issue
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLoginForm = (data) => {

        //user login with email and password
        loginUser(data.email, data.password)
            .then((result) => {
                const loginUser = result.user;
                console.log(loginUser)
                reset();
                setErrorMessage("");
                const userInfo = {
                    name: loginUser.displayName,
                    email: loginUser.email,
                }
                // save user info to the database
                storUserInfoToDatabase(userInfo)
                navigate(from, { replace: true }); //used for login user redirect path
            })
            .catch((error) => {
                const errorMsg = error.message;
                setErrorMessage(errorMsg);
                reset();
            })
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
                navigate(from, { replace: true }); //used for login user redirect path
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
                    toast.success('You have successfully login')
                    localStorage.setItem('accessToken', data.token)//stored access token at the local storage
                }
            })
    }

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

export default Login;