import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider';


const BookingModal = ({ productDetails, setCloseBookingModal, handleBooking }) => {
    const { _id, productName, resellPrice, email } = productDetails
    const { user } = useContext(AuthContext)

    //used for react hook form
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();


    const bookingForm = (data) => {

        const bokingInfo = {
            bookingID: _id,
            productName,
            productPrice: resellPrice,
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyerLocation: data.buyerLocation,
            buyerMobileNumber: data.buyerMobileNumber,
            sellerEmail: email,
            payment: false,
            orderTime: new Date().toLocaleString(),
            order: true,
        }

        handleBooking(bokingInfo)
        reset()
        setCloseBookingModal(false)
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div className="p-2 mx-auto max-w-[24rem] bg-base-100 shadow-md rounded-md">
                            <div className=''>
                                <form onSubmit={handleSubmit(bookingForm)}>
                                    <div className="">
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Product name</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("productName")}
                                                disabled
                                                className="input input-bordered w-full "
                                                defaultValue={productName}
                                            />
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Product price</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("productPrice")}
                                                disabled
                                                className="input input-bordered w-full "
                                                defaultValue={resellPrice}
                                            />
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Your name</span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("userName")}
                                                disabled
                                                className="input input-bordered w-full "
                                                defaultValue={user?.displayName}
                                            />
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Your email</span>
                                            </label>
                                            <input
                                                type="email"
                                                {...register("userEmail")}
                                                disabled
                                                className="input input-bordered w-full "
                                                defaultValue={user?.email}
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <input
                                                type="text"
                                                {...register("buyerMobileNumber")}
                                                className="input input-bordered w-full "
                                                required
                                                placeholder="Enter your mobile number"
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <input
                                                type="text"
                                                {...register("buyerLocation", {
                                                })}
                                                className="input input-bordered w-full "
                                                required
                                                placeholder="Enter your pickup location"
                                            />
                                            <input
                                                type="submit"
                                                className="bg-[#F45510] mt-5 py-4 text-white w-full rounded-lg cursor-pointer"
                                                value="Submit"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;