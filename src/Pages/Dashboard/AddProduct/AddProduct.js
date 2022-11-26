import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddProduct = () => {
    //used for react hook form
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext)

    const handleAddProductForm = (data) => {
        const category = data.category.toLowerCase();

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
                    //upload new product to the server
                    axios.post(`${process.env.REACT_APP_API_URL}/products`, {
                        category: category,
                        condition: data.condition,
                        productName: data.productName,
                        resellPrice: data.resellPrice,
                        originalPrice: data.originalPrice,
                        sellerMobileNumber: data.sellerMobileNumber,
                        sellerLocation: data.sellerLocation,
                        usedTime: data.usedTime,
                        description: data.description,
                        postedTime: new Date().toLocaleString(),
                        productImg: imgData.data.display_url,
                        sellerName: user.displayName,
                        email: user.email
                    })
                        .then(productData => {
                            if (productData.data.acknowledged) {
                                toast.success('Your product has been successfully added!')
                            }
                        })
                        .catch(error => console.log(error))
                }
            }).catch(error => console.log(error))
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleAddProductForm)}>
                <div className="bg-white mx-4 mt-10 p-4 rounded-md shadow-md">
                    <div className=" ">
                        <div className="grid lg:grid-cols-2 gap-4">
                            <select
                                {...register("category", { required: "Category is required" })}
                                className="select select-bordered ">
                                <option>Select category</option>
                                <option>Feature phone</option>
                                <option>Low budget smartphone</option>
                                <option>Expensive smartphone</option>
                            </select>
                            <select
                                {...register("condition", { required: "Select is required" })}
                                className="select select-bordered ">
                                <option>Select condition</option>
                                <option>excellent</option>
                                <option>good</option>
                                <option>fair</option>
                            </select>
                            <input
                                type="text"
                                {...register("productName")}
                                className="input input-bordered"
                                required
                                placeholder="Product name"
                            />
                            <input
                                type="text"
                                {...register("resellPrice")}
                                className="input input-bordered"
                                required
                                placeholder="Product resell price"
                            />
                            <input
                                type="text"
                                {...register("originalPrice")}
                                className="input input-bordered"
                                required
                                placeholder="Product original price"
                            />
                            <input
                                type="text"
                                {...register("sellerMobileNumber")}
                                className="input input-bordered"
                                required
                                placeholder="Contact number"
                            />
                            <input
                                type="text"
                                {...register("sellerLocation")}
                                className="input input-bordered"
                                required
                                placeholder="Location"
                            />
                            <input
                                type="text"
                                {...register("usedTime")}
                                className="input input-bordered"
                                required
                                placeholder="Used time"
                            />
                            <div className="form-control mt-6 border rounded-lg bg-white">
                                <label className="label">
                                    <span className="label-text">Select product image</span>
                                </label>
                                <input
                                    type="file"
                                    {...register("img", { required: "image is required" })}
                                    className="p-2 border-none outline-none"
                                    required
                                />
                            </div>
                            <textarea {...register("description")} className="textarea textarea-bordered" placeholder="Enter description"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <input
                                type="submit"
                                className="bg-[#2CBBD5] w-32 mt-5 py-3 text-white rounded-lg cursor-pointer"
                                value="Submit"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
